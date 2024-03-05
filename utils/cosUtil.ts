import COS from 'cos-js-sdk-v5';
import axios from 'axios';

class CosUtils {
    client: any;
    credentialResult: any;

    constructor() {
    }

    async init(token:string,env:string) {
        let url = '';
        if(env=='dev'){
            url = "https://dev.healbone.cn/server/common/file/getTmpAccessKey";
        }else{
            url = "https://www.healbone.cn/server/common/file/getTmpAccessKey";
        }
        // const res = await axios.get("https://dev.healbone.cn/hospitalserver/setting/getTmpAccessKey", {
        const res = await axios.post(url, {}, {
            // params: {
            //     prefix: "tmp",
            //     event: "tmp",
            //     durationSeconds: 6,
            // },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
                'role': 'p'
            }
        });
        console.log(res)
        this.credentialResult = res.data.obj.result;
        this.credentialResult.region = "ap-nanjing";
        console.log(this.credentialResult)
        this.client = new COS({
            SecretId: this.credentialResult.credentialData.credentials.tmpSecretId,
            SecretKey: this.credentialResult.credentialData.credentials.tmpSecretKey,
            SecurityToken: this.credentialResult.credentialData.credentials.sessionToken
        })
        return this;
    }

    getObjectUrl = async (
        key: string,
        sign: boolean = false
    ): Promise<string> => {
        return new Promise((resolve, reject) => {
            /* Upload file */
            this.client.getObjectUrl(
                {
                    Bucket: this.credentialResult.bucket,
                    Region: this.credentialResult.region,
                    Key: `tmp/${key}`,
                    Sign: sign
                },
                function (err: any, data: any) {
                    /* reject promise when upload failed */
                    if (err) {
                        reject(err);
                        return;
                    }

                    /* resolve data on success */
                    resolve(data.Url.toString());
                    return;
                }
            );
        });
    };

    async upload(key: string, file: any) {
        console.log(key)
        return new Promise((resolve, reject) => {
            this.client.putObject(
                {
                    Bucket: this.credentialResult.bucket,
                    Region: this.credentialResult.region,
                    Key: `tmp/shoulderFollowUp/${key}`,
                    StorageClass: 'STANDARD',
                    Body: file,
                },
                function (err: any, data: any) {
                    /* reject promise when upload failed */
                    console.log(data);
                    console.log(err)

                    if (err) {
                        reject(err);
                        return;
                    }

                    /* resolve data on success */
                    resolve(`https://${data.Location}`);
                    return;
                }
            );
        });
    }
}

export default CosUtils;