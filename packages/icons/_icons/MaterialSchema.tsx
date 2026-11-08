import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSchema: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-40v-220h100v-110H160v-220h100v-110H160v-220h260v220H320v110h100v80h160v-80h260v220H580v-80H420v80H320v110h100v220zm60-60h140v-100H220zm0-330h140v-100H220zm420 0h140v-100H640zM220-760h140v-100H220zm70 610" /></svg>;
export default MaterialSchema;