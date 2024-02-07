import { BaseProps } from "./helpers";

export type Children = {
  children?: any; //AttributeValue | AttributeValue[] | string | string[];
};
export type CustomComponentProps = BaseProps & Children;
export type CustomComponent<Props = null> = {
  (
    props: Props extends null
      ? CustomComponentProps
      : Props & CustomComponentProps
  ): any | null;
};
