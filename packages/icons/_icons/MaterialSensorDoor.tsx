import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSensorDoor: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-80v-740q0-24 18-42t42-18h520q24 0 42 18t18 42v740zm60-60h520v-680H220zm400.5-290q20.5 0 35-15t14.5-35.5-14.58-35Q640.83-530 620-530q-20 0-35 14.58-15 14.59-15 35.42 0 20 15 35t35.5 15M220-140v-680z" /></svg>;
export default MaterialSensorDoor;