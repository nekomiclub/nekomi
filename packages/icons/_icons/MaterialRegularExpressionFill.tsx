import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRegularExpressionFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M197-199q-54-58-85.5-130.5T80-481q0-80 30.5-152.5T197-763l43 42q-48 48-74 110t-26 130q0 67 27 128t73 111zm147.5-65.5Q330-279 330-300t14.5-35.5T380-350t35.5 14.5T430-300t-14.5 35.5T380-250t-35.5-14.5M529-450v-79l-67 40-30-52 67-39-67-39 30-52 67 40v-79h60v79l67-40 30 52-67 39 67 39-30 52-67-40v79zm234 251-43-43q47-48 73.5-109.5T820-481t-26.5-129.5T720-721l43-42q54 58 85.5 130.5T880-481q0 80-30.5 152.5T763-199" /></svg>;
export default MaterialRegularExpressionFill;