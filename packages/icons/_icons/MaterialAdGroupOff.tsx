import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAdGroupOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m831-201-59-59h48v-500H272l-71-71q4-21 20.5-35t38.5-14h560q24.75 0 42.38 17.62Q880-844.75 880-820v560q0 22-13.5 38.5T831-201m3 172L663-200H260q-24.75 0-42.37-17.63Q200-235.25 200-260v-403L29-834l42-42L876-71zM260-260h343L260-603zM140-80q-24.75 0-42.37-17.63Q80-115.25 80-140v-620h60v620h620v60zm379-433" /></svg>;
export default MaterialAdGroupOff;