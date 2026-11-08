import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFileSaveFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M580 0v-60h300V0zm150-124L584-270l42-42 74 74v-181h60v181l74-74 42 42zm-510-36q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h306l234 234v167H520v319zm280-460h200L500-820z" /></svg>;
export default MaterialFileSaveFill;