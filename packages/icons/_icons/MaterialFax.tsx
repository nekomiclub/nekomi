import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFax: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M200-120q-50 0-85-35t-35-85v-280q0-50 35-85t85-35q27 0 49.5 11t39.5 29h31v-200h400v200h60q41.67 0 70.83 29.17Q880-541.67 880-500v340H289q-17 18-39.5 29T200-120m0-60q25.5 0 42.75-17.25T260-240v-280q0-25.5-17.25-42.75T200-580t-42.75 17.25T140-520v280q0 25.5 17.25 42.75T200-180m180-420h280v-140H380zm-60 380h500v-280q0-17-11.5-28.5T780-540H320zm308.5-191.5Q640-423 640-440t-11.5-28.5T600-480t-28.5 11.5T560-440t11.5 28.5T600-400t28.5-11.5m120 0Q760-423 760-440t-11.5-28.5T720-480t-28.5 11.5T680-440t11.5 28.5T720-400t28.5-11.5m-120 120Q640-303 640-320t-11.5-28.5T600-360t-28.5 11.5T560-320t11.5 28.5T600-280t28.5-11.5m120 0Q760-303 760-320t-11.5-28.5T720-360t-28.5 11.5T680-320t11.5 28.5T720-280t28.5-11.5M380-280h140v-200H380zm-60 60v-320z" /></svg>;
export default MaterialFax;