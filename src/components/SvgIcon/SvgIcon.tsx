import React from "react";
import { Size, svgClass, viewBoxSize } from "../Button/props";

interface BaseSvgIconProps {
  size?: Size;
  margin?: string;
}

export type SvgIconProps = BaseSvgIconProps & React.SVGProps<SVGSVGElement>;

export type SvgIconSignature = (props: SvgIconProps) => React.ReactElement;

export const SvgIcon: React.FC<SvgIconProps> = ({
  children,
  size = "medium",
  margin,
  ...props
}) => {
  const sizeClass = svgClass(size);
  const classes = `${sizeClass} ${margin ? margin : ""} fill-current`;

  return (
    <svg
      className={classes}
      focusable={false}
      viewBox={props.viewBox || viewBoxSize(size)}
      role="img"
    >
      {children}
    </svg>
  );
};
