import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTravelLuggageAndBags: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M260-80v-45q-25 0-42.5-17.63Q200-160.25 200-185v-475q0-24.75 17.63-42.38Q235.25-720 260-720h105v-125q0-14 10.5-24.5T400-880h160q14 0 24.5 10.5T595-845v125h105q24.75 0 42.38 17.62Q760-684.75 760-660v475q0 24.75-17.62 42.37Q724.75-125 700-125v45h-60v-45H320v45zm165-640h110v-100H425zm169.5 222Q651-511 700-542v-118H260v118q49 31 105.5 44T480-485t114.5-13M450-380v-41q-51-3-99-16.5T260-477v292h440v-292q-43 26-91 39.5T510-421v41zm30-97" /></svg>;
export default MaterialTravelLuggageAndBags;