import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAdGroupOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M834-29 663-200H260q-24.75 0-42.37-17.63Q200-235.25 200-260v-403L29-834l42-42L876-71zM140-80q-24.75 0-42.37-17.63Q80-115.25 80-140v-620h60v620h620v60zm691-121L272-760h548v-60H260v48l-59-59q4-21 20.5-35t38.5-14h560q24.75 0 42.38 17.62Q880-844.75 880-820v560q0 22-13.5 38.5T831-201" /></svg>;
export default MaterialAdGroupOffFill;