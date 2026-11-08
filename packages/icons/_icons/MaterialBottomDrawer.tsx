import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBottomDrawer: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-319q17-16 38-23t46-7h432q25 0 46.5 7t37.5 23v-341H180zm0 259h600v-145q0-34.65-24.67-59.33Q730.65-409 696-409H264q-34.65 0-59.32 24.67Q180-359.65 180-325zm0 0h600z" /></svg>;
export default MaterialBottomDrawer;