import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDesktopCloudFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M360-410h260q38 0 64-26.5t26-64.5-27-64-65-26h-9l-1-9q-7-48-43.5-79T480-710q-38 0-69 20t-48 55l-3 5-6 1q-44 2-74 33.5T250-520q0 46 32 78t78 32m-26 290v-60h86v-100H140q-24 0-42-18t-18-42v-440q0-24 18-42t42-18h680q24 0 42 18t18 42v440q0 24-18 42t-42 18H540v100h86v60z" /></svg>;
export default MaterialDesktopCloudFill;