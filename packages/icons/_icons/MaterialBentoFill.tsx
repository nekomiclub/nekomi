import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBentoFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M610-510v-250h210q24 0 42 18t18 42v190zM140-200q-24 0-42-18t-18-42v-440q0-24 18-42t42-18h410v560zm175-230q21 0 35.5-15t14.5-35q0-21-14.5-35.5T315-530q-20 0-35 14.5T265-480q0 20 15 35t35 15m295 230v-250h270v190q0 24-18 42t-42 18z" /></svg>;
export default MaterialBentoFill;