import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialResetColorsFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M686.5-44.5Q678-48 670-56L505-220q-15-15-15-35.5t15-35.5l158-158-80-79 42-43 280 280q8 8 11.5 16.5T920-256t-3.5 19-11.5 17L741-56q-8 8-17 11.5T705-41t-18.5-3.5M559-261h291L705-406zM160-120v-60h121q-73-48-117-127t-44-173q0-75 28.5-140.5t77-114 114-77T480-840q134 0 233.5 86T835-540h-62q-23-102-104-171t-189-69q-125 0-212.5 87.5T180-480q0 81 38.5 147.5T320-226v-114h60v220z" /></svg>;
export default MaterialResetColorsFill;