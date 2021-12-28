export interface CommonDefaultProps {
  // actions
  actionType: string;
  url: string;
  // size
  height: string;
  width: string;
  paddingLeft: string;
  paddingRight: string;
  paddingTop: string;
  paddingBottom: string;
  // border type
  borderStyle: string;
  borderColor: string;
  borderWidth: string;
  borderRadius: string;
  // shadow and opacity
  boxShadow: string;
  opacity: string;
  // position and x,y
  position: string;
  left: string;
  top: string;
  right: string;
}

export interface TextComponentProps extends CommonDefaultProps {
  text: string;
  fontSize: string;
  fontFamily: string;
  fontWeight: string;
  fontStyle: string;
  textDecoration: string;
  lineHeight: string;
  textAlign: string;
  color: string;
  backgroundColor: string;
}

import { mapValues, without } from "lodash-es";

export const commonDefaultProps: CommonDefaultProps = {
  // actions
  actionType: "",
  url: "",
  // size
  height: "",
  width: "100%",
  paddingLeft: "0px",
  paddingRight: "0px",
  paddingTop: "0px",
  paddingBottom: "0px",
  // border type
  borderStyle: "none",
  borderColor: "#000",
  borderWidth: "0",
  borderRadius: "0",
  // shadow and opacity
  boxShadow: "0 0 0 #000000",
  opacity: "1",
  // position and x,y
  position: "relative", //  absolute
  left: "0",
  top: "0",
  right: "0",
};

export const TextComponentProps: TextComponentProps = {
  text: "",
  fontSize: "30px",
  fontFamily: "",
  fontWeight: "",
  fontStyle: "",
  textDecoration: "",
  lineHeight: "",
  textAlign: "",
  color: "",
  backgroundColor: "",
  ...commonDefaultProps,
};

export const textDefaultProps = without(
  Object.keys(TextComponentProps),
  "actionType",
  "url",
  "text"
);

// eslint-disable-next-line @typescript-eslint/ban-types
export const transformToComponentProps = <T extends {}>(props: T) => {
  return mapValues(props, (item: any) => {
    return {
      type: (item as any).constructor as StringConstructor,
      default: item,
    };
  });
};

export interface ImageComponentProps extends CommonDefaultProps {
  src: string;
}
export const imageDefaultProps: ImageComponentProps = {
  src: "",
  ...commonDefaultProps,
};
export const imageStylePropsNames = without(
  Object.keys(imageDefaultProps),
  "src"
);
export const textStylePropNames = without(
  Object.keys(textDefaultProps),
  "actionType",
  "url",
  "text"
);
