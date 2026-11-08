import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSdCardAlert: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M220-80q-24 0-42-18t-18-42v-501l239-239h341q24 0 42 18t18 42v680q0 24-18 42t-42 18zm0-60h520v-680H426L220-613.88zm260-149q14 0 24.5-10.5T515-324t-10.5-24.5T480-359t-24.5 10.5T445-324t10.5 24.5T480-289m-28-143h60v-205h-60zM220-140h520z" /></svg>;
export default MaterialSdCardAlert;