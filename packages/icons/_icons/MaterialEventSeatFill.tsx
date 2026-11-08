import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEventSeatFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-120v-220h640v220h-60v-160H220v160zm9.88-290q-20.88 0-35.38-14.62t-14.5-35.5 14.62-35.38 35.5-14.5 35.38 14.62 14.5 35.5-14.62 35.38-35.5 14.5M280-400v-380q0-24.75 17.63-42.38Q315.25-840 340-840h280q24.75 0 42.38 17.62Q680-804.75 680-780v380zm474.5-24.62q-14.5-14.62-14.5-35.5t14.62-35.38 35.5-14.5 35.38 14.62 14.5 35.5-14.62 35.38-35.5 14.5-35.38-14.62" /></svg>;
export default MaterialEventSeatFill;