import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTransgender: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M593-387q47-47 47-113t-47-113-113-47-113 47-47 113 47 113 113 47 113-47M450-40v-80h-80v-60h80v-101q-82-14-136-75.5T260-500q0-36 11-70t33-63l-42-42-56 56-42-42 56-56-100-100v117H60v-220h220v60H163l100 100 56-56 42 42-56 56 43 43q29-22 62.5-33.5T480-720t70 11 63 33l184-184H680v-60h220v220h-60v-117L656-633q22 29 33 63t11 70q0 82-54 143.5T510-281v101h80v60h-80v80z" /></svg>;
export default MaterialTransgender;