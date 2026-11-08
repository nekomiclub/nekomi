import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTableChart: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M780-121H180q-24 0-42-18t-18-42v-599q0-24 18-42t42-18h600q24 0 42 18t18 42v599q0 24-18 42t-42 18M180-639h600v-141H180zm130 60H180v398h130zm340 0v398h130v-398zm-60 0H370v398h220z" /></svg>;
export default MaterialTableChart;