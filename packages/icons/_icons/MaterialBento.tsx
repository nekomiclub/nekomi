import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBento: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-200q-24 0-42-18t-18-42v-440q0-24 18-42t42-18h680q24 0 42 18t18 42v440q0 24-18 42t-42 18zm410-310h270v-190H550zM140-260h350v-440H140zm180-170q-20 0-35-15t-15-35.5 15-35 35.5-14.5 35 14.58Q370-500.83 370-480q0 20-14.58 35-14.59 15-35.42 15m230 170h270v-190H550z" /></svg>;
export default MaterialBento;