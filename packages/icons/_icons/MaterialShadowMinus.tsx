import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialShadowMinus: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-80q-24 0-42-18t-18-42v-508q0-24 18-42t42-18h112v-112q0-24 18-42t42-18h508q24 0 42 18t18 42v508q0 24-18 42t-42 18H708v112q0 24-18 42t-42 18zm172-232h508v-508H312zm98-218v-60h300v60z" /></svg>;
export default MaterialShadowMinus;