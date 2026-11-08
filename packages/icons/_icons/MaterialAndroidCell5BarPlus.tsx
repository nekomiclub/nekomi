import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAndroidCell5BarPlus: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M40-160v-225h100v225zm195 0v-308h100v308zm195 0v-433h100v433zm490-288q-24-10-49-13.5t-51-1.5v-337h100zM625-675h100v245q-33 22-56 55t-33 73h-11zm185 531v-80h-80v-60h80v-80h60v80h80v60h-80v80z" /></svg>;
export default MaterialAndroidCell5BarPlus;