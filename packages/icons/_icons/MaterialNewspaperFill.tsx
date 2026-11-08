import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNewspaperFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-120q-24.75 0-42.37-17.63Q80-155.25 80-180v-660l67 67 66-67 67 67 67-67 66 67 67-67 67 67 66-67 67 67 67-67 66 67 67-67v660q0 24.75-17.62 42.37Q844.75-120 820-120zm0-60h310v-280H140zm370 0h310v-110H510zm0-170h310v-110H510zM140-520h680v-120H140z" /></svg>;
export default MaterialNewspaperFill;