import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSimCardLockFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M220-80q-24 0-42-18t-18-42v-501l239-239h341q24 0 42 18t18 42v680q0 24-18 42t-42 18zm180-245h160q14 0 24.5-10.5T595-360v-120q0-14-11.5-24.5T555-515v-45q0-31-22-53t-53-22-53 22-22 53v45q-17 0-28.5 10.5T365-480v120q0 14 10.5 24.5T400-325m35-190v-45q0-19 13-32t32-13 32 13 13 32v45z" /></svg>;
export default MaterialSimCardLockFill;