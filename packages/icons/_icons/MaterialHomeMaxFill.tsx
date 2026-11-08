import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHomeMaxFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M280-160v-30H180q-59 0-99.5-40.5T40-330v-290q0-59 40.5-99.5T180-760h600q59 0 99.5 40.5T920-620v290q0 59-40.5 99.5T780-190H680v30z" /></svg>;
export default MaterialHomeMaxFill;