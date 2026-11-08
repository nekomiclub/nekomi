import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialResetExposureFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-120v-60h121q-73-48-117-127t-44-173q0-75 28.5-140.5t77-114 114-77T480-840q134 0 233.5 86T835-540h-62q-23-102-104-171t-189-69q-125 0-212.5 87.5T180-480q0 81 38.5 147.5T320-226v-114h60v220zm365 40q-19 0-32-13t-13-32v-310q0-19 13-32t32-13h310q19 0 32 13t13 32v310q0 19-13 32t-32 13zm15-60h280v-280z" /></svg>;
export default MaterialResetExposureFill;