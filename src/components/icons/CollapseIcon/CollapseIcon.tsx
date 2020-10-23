import React from "react";
import { SvgIcon, SvgIconProps } from "../../SvgIcon";

interface IconProps {}

export type CollapseIconSignature = (
  props: IconProps & SvgIconProps
) => React.ReactElement;

export const CollapseIcon: CollapseIconSignature = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path
        d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm5 9H7v-2h10z"
        opacity=".3"
      />
      <path d="M13 11H7v2h10v-2zm-1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    </SvgIcon>
  );
};
