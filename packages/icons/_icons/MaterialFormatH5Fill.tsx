import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFormatH5Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-280v-400h60v170h180v-170h60v400h-60v-170H180v170zm420 0v-60h240v-110H540v-230h300v60H600v110h180q24.75 0 42.38 17.62Q840-474.75 840-450v110q0 24.75-17.62 42.37Q804.75-280 780-280z" /></svg>;
export default MaterialFormatH5Fill;