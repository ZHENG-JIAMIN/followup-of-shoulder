// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bQFzjFXbkpSsuDuBQNZ8MF
// Component: uoD6g_MxRxrM

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { UploadWrapper } from "@plasmicpkgs/antd5/skinny/registerUpload";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: bQFzjFXbkpSsuDuBQNZ8MF/projectcss
import sty from "./PlasmicUploadFiles.module.css"; // plasmic-import: uoD6g_MxRxrM/css

createPlasmicElementProxy;

export type PlasmicUploadFiles__VariantMembers = {};
export type PlasmicUploadFiles__VariantsArgs = {};
type VariantPropType = keyof PlasmicUploadFiles__VariantsArgs;
export const PlasmicUploadFiles__VariantProps = new Array<VariantPropType>();

export type PlasmicUploadFiles__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicUploadFiles__ArgsType;
export const PlasmicUploadFiles__ArgProps = new Array<ArgPropType>("children");

export type PlasmicUploadFiles__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  upload2?: Flex__<typeof UploadWrapper>;
  button?: Flex__<typeof AntdButton>;
  img?: Flex__<typeof PlasmicImg__>;
  text?: Flex__<"div">;
};

export interface DefaultUploadFilesProps {
  children?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicUploadFiles__RenderFunc(props: {
  variants: PlasmicUploadFiles__VariantsArgs;
  args: PlasmicUploadFiles__ArgsType;
  overrides: PlasmicUploadFiles__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "upload2.files",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => []
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img___4Gjj)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"158px"}
              loading={"lazy"}
              src={{
                src: "/plasmic/follow_up_page_of_shoulder_zjm/images/演示图片png.png",
                fullWidth: 383,
                fullHeight: 314,
                aspectRatio: undefined
              }}
            />
          ),

          value: args.children
        })}
      </div>
      <UploadWrapper
        data-plasmic-name={"upload2"}
        data-plasmic-override={overrides.upload2}
        accept={"image/*"}
        className={classNames("__wab_instance", sty.upload2)}
        files={generateStateValueProp($state, ["upload2", "files"])}
        onFilesChange={generateStateOnChangeProp($state, ["upload2", "files"])}
        showUploadList={true}
      >
        <AntdButton
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          className={classNames("__wab_instance", sty.button)}
        >
          <PlasmicImg__
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"97px"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"158px"}
            loading={"lazy"}
            src={{
              src: "/plasmic/follow_up_page_of_shoulder_zjm/images/点击上传图片png.png",
              fullWidth: 489,
              fullHeight: 315,
              aspectRatio: undefined
            }}
          />

          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            {""}
          </div>
        </AntdButton>
      </UploadWrapper>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "upload2", "button", "img", "text"],
  freeBox: ["freeBox"],
  upload2: ["upload2", "button", "img", "text"],
  button: ["button", "img", "text"],
  img: ["img"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  upload2: typeof UploadWrapper;
  button: typeof AntdButton;
  img: typeof PlasmicImg__;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicUploadFiles__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicUploadFiles__VariantsArgs;
    args?: PlasmicUploadFiles__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicUploadFiles__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicUploadFiles__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicUploadFiles__ArgProps,
          internalVariantPropNames: PlasmicUploadFiles__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicUploadFiles__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicUploadFiles";
  } else {
    func.displayName = `PlasmicUploadFiles.${nodeName}`;
  }
  return func;
}

export const PlasmicUploadFiles = Object.assign(
  // Top-level PlasmicUploadFiles renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    upload2: makeNodeComponent("upload2"),
    button: makeNodeComponent("button"),
    img: makeNodeComponent("img"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicUploadFiles
    internalVariantProps: PlasmicUploadFiles__VariantProps,
    internalArgProps: PlasmicUploadFiles__ArgProps
  }
);

export default PlasmicUploadFiles;
/* prettier-ignore-end */
