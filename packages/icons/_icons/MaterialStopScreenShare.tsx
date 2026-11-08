import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStopScreenShare: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M552-485 444-593h86v-70l100 100zm253 254-60-60h69v-483H262l-60-60h612q24 0 42 18t18 42v483q0 26-20 44t-49 16m32 203-97-97H40v-60h640l-46-46H147q-24 0-42-18t-18-42v-487l-55-55 43-43L880-71zM393-472v85h-60v-90q0-10 2-22.5t7-23.03L147-718v427h427zm-32-33" /></svg>;
export default MaterialStopScreenShare;