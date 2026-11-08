import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDevicesFold2: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M696-120H260q-24.75 0-42.37-17.63Q200-155.25 200-180v-600q0-24.75 17.63-42.38Q235.25-840 260-840h457q18.85 0 33.92 10.5Q766-819 773-802l108 270q12 29-5.49 55.5Q858.01-450 826-450h-70v270q0 24.75-17.62 42.37Q720.75-120 696-120m130-390L717-780H255l108 270zM696-180v-270H364q-18.85 0-33.92-10.5Q315-471 308-488l-48-119v427zM541-645" /></svg>;
export default MaterialDevicesFold2;