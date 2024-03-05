import React, { useEffect, useMemo, useState } from "react";
import { DataProvider, GlobalActionsProvider } from "@plasmicapp/host";
import axios from "axios";
import CosUtils from "@/utils/cosUtil";
import { Buffer } from "buffer";
import wx from "weixin-js-sdk";
import { useImmer } from 'use-immer';

interface GlobalContextProps {
    store?: object;
}

export const GlobalContext = ({ children }: React.PropsWithChildren<GlobalContextProps>) => {
    const cosUtil = new CosUtils();

    const [store, setStore] = useImmer({
        state: {
            token: "22222",
            bucket_base_url: "https://hb-static-dev-1257043728.cos.ap-nanjing.myqcloud.com/tmp/shoulderFollowUp/",
            bucket_base_url_dev: "https://hb-static-dev-1257043728.cos.ap-nanjing.myqcloud.com/tmp/shoulderFollowUp/",
            bucket_base_url_www: "https://hb-static-production-1257043728.cos.ap-nanjing.myqcloud.com/tmp/shoulderFollowUp/"
        }
    });

    const actions = useMemo(() => ({
        setToken: (token: string) => {
            // setStore({
            //     state: {
            //         ...store.state,
            //         token: token
            //     }
            // })
            setStore(store => {
                store.state.token = token;
            })
        },
        upload: async (token: string, file: any, env: string) => {
            console.log(1111, file)
            if (!file) {
                // 删除图片时也会触发上传，要进行拦截
                return
            }

            if (env == 'dev') {
                setStore(store => {
                    store.state.bucket_base_url = store.state.bucket_base_url_dev
                })
            } else {
                setStore(store => {
                    store.state.bucket_base_url = store.state.bucket_base_url_www
                })
            }

            await cosUtil.init(token, env);
            console.log(file)

            // 判断文件类型
            let suffix = file.name.split('.')[1];
            // console.log(suffix)

            // 设置文件名
            let name = file.uid + '.' + suffix;
            // console.log(name);

            // 将Base64字符串转换为Blob
            console.log(file.status)
            let byteCharacters = atob(file.contents);
            let byteArrays = [];
            for (let offset = 0; offset < byteCharacters.length; offset += 512) {
                const slice = byteCharacters.slice(offset, offset + 512);
                const byteNumbers = new Array(slice.length);
                for (let i = 0; i < slice.length; i++) {
                    byteNumbers[i] = slice.charCodeAt(i);
                }
                const byteArray = new Uint8Array(byteNumbers);
                byteArrays.push(byteArray);
            }
            let blob = new Blob(byteArrays, { type: "application/octet-stream" }); // 或者使用你的文件的实际MIME类型
            await cosUtil.upload(name, blob);
        },
        submitShoulderFollowUpRecord: async (questionaireId: string, result: object, env: string) => {
            console.log('result', result)
            let url = '';
            if (env == 'dev') {
                url = "https://dev.healbone.cn/gaitcv/user/SubmitShoulderFollowUpRecord";
            } else {
                url = "https://www.healbone.cn/gaitcv/user/SubmitShoulderFollowUpRecord";
            }
            await axios.post(url, {
                questionaireId: questionaireId,
                result: result
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
        },
        goback: (questionaireId: string, env: string) => {
            let url = '';
            if (env == 'dev') {
                url = "https://dev.healbone.cn/gaitcv/user/GoBackFromShoulderFollowUp";
            } else {
                url = "https://www.healbone.cn/gaitcv/user/GoBackFromShoulderFollowUp";
            }
            axios.post(url, {
                questionaireId: questionaireId,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
        }
    }), [store]);

    // useEffect(()=>{
    //     cosUtil.init();
    // },[])

    return (
        <GlobalActionsProvider contextName="GlobalContext" actions={actions}>
            <DataProvider name="store" data={store}>
                {children}
            </DataProvider>
        </GlobalActionsProvider>
    )
}