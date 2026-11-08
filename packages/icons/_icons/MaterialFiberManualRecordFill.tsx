import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFiberManualRecordFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M282.5-282.5Q200-365 200-480t82.5-197.5T480-760t197.5 82.5T760-480t-82.5 197.5T480-200t-197.5-82.5" /></svg>;
export default MaterialFiberManualRecordFill;