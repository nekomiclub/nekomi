import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAndroidCell5BarOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M430-160v-246L36-682l46-65 786 550-45 65-98-68v40H625v-110l-95-66v176zm-390 0v-225h100v225zm195 0v-308h100v308zm490-211-100-70v-234h100zm195 137-100-70v-496h100z" /></svg>;
export default MaterialAndroidCell5BarOff;