import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFinanceChipFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M470-320h29v-32q28-4 47.5-23t19.5-49q0-26-20-43.5T500-496v-74q10 3 16.5 10t9.5 17l36-15q-7-21-24-33.5T500-608v-32h-30v31q-28 3-47.5 20.5T403-542q0 27 20.5 45t46.5 29v79q-16-5-27-17t-15-28l-35 15q8 28 28 46t49 22zm30-70v-66q11 5 19.5 12t8.5 21q0 16-8 22.5T500-390m-30-119q-11-5-20-12t-9-21 9-20.5 20-8.5zM320-200q-117 0-198.5-81.5T40-480t81.5-198.5T320-760h320q117 0 198.5 81.5T920-480t-81.5 198.5T640-200z" /></svg>;
export default MaterialFinanceChipFill;