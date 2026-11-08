import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMobileSensorHiFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M301-120q-25 0-42.5-17.5T241-180v-600q0-25 17.5-42.5T301-840h359q25 0 42.5 17.5T720-780v600q0 25-17.5 42.5T660-120zm199-529q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9M0-280v-280h60v280zm120-120v-283h60v283zm780 0v-283h60v283zM780-277v-283h60v283z" /></svg>;
export default MaterialMobileSensorHiFill;