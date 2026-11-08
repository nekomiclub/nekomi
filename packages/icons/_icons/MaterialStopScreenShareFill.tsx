import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStopScreenShareFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m837-28-97-97H40v-60h640l-46-46H147q-24 0-42-18t-18-42v-487l-55-55 43-43L880-71zM393-472l-51-51q-5 11-7 23.5t-2 22.5v90h60zm412 241L552-485l78-78-100-100v70h-86L202-834h612q24 0 42 18t18 42v483q0 26-20 44t-49 16" /></svg>;
export default MaterialStopScreenShareFill;