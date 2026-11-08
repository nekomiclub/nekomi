import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRangeHoodFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M108-468h743L680-640v-200H280v200zm32 308h680q25 0 42.5-17.5T880-220v-188H80v188q0 25 17.5 42.5T140-160m260-134v-40h160v40z" /></svg>;
export default MaterialRangeHoodFill;