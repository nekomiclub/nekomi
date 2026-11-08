import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSolarPowerFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-820v-60h120v60zM80-80h370v-170H114zm154-520-43-42 85-85 43 42zM126-310h324v-170H160zm229-442.5Q304-805 300-880h360q-4 75-55 127.5T480-700t-125-52.5M450-520v-120h60v120zm60 440h370l-34-170H510zm0-230h324l-34-170H510zm216-291-85-85 42-42 86 84zm-6-219v-60h120v60z" /></svg>;
export default MaterialSolarPowerFill;