import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFiles: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-160q-24.75 0-42.37-17.63Q80-195.25 80-220v-440q0-24.75 17.63-42.38Q115.25-720 140-720h254l80-80h346q24.75 0 42.38 17.62Q880-764.75 880-740v520q0 24.75-17.62 42.37Q844.75-160 820-160zm59-280h241v-241zm-59-26 194-194H140zm0 86v160h680v-520H500v300q0 24.75-17.62 42.37Q464.75-380 440-380zm310-130" /></svg>;
export default MaterialFiles;