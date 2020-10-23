import React from "react";
import { SvgIcon, SvgIconProps } from "../../SvgIcon";

interface DownloadIconProps {}

export type DownloadIconSignature = (
  props: DownloadIconProps & SvgIconProps
) => React.ReactElement;

export const DownloadIcon: DownloadIconSignature = ({ ...props }) => {
  return (
    <SvgIcon {...props} viewBox="0 0 20 18">
      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
    </SvgIcon>
  );
};
