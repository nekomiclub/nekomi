import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFiberManualRecord: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M281.5-281.5Q200-363 200-480t81.5-198.5T480-760t198.5 81.5T760-480t-81.5 198.5T480-200t-198.5-81.5M636-324q64-64 64-156t-64-156-156-64-156 64-64 156 64 156 156 64 156-64" /></svg>;
export default MaterialFiberManualRecord;