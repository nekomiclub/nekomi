import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCharger: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m462-182 170-360H502v-240L332-422h130zm18 102q-85 0-158-30.5T195-195t-84.5-127T80-480q0-84 30.5-157T195-764t127-85 158-31q84 0 157 31t127 85 85 127 31 157q0 85-31 158t-85 127-127 84.5T480-80m242.5-157.5Q820-335 820-480t-97.5-242.5T480-820t-242.5 97.5T140-480t97.5 242.5T480-140t242.5-97.5" /></svg>;
export default MaterialCharger;