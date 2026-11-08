import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTabSearch: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-160q-24.75 0-42.37-17.63Q80-195.25 80-220v-520q0-24.75 17.63-42.38Q115.25-800 140-800h680q24.75 0 42.38 17.62Q880-764.75 880-740v180H520v-180H140v520h300v60zm0-60v-340 56-236zM878-80 768-190q-21 17-46.5 23.5T670-160q-70.83 0-120.42-49.62Q500-259.24 500-330.12t49.62-120.38 120.5-49.5 120.38 49.58Q840-400.83 840-330q0 26-6.5 52T810-232l110 110zM748-251.86q32-31.86 32-78T748.14-408t-78-32T592-408.14t-32 78T591.86-252t78 32T748-251.86" /></svg>;
export default MaterialTabSearch;