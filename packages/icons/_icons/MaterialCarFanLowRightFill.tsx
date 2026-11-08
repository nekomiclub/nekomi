import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCarFanLowRightFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m422-40-52-30 142-243q8.17-14.25 21.91-22.13Q547.66-343 564-343h111l62-223q9-32 34.47-52.5Q796.93-639 829-639q43.6 0 71.3 33.5T920-528l-46 238q-3.73 21-20.54 34.5Q836.66-242 815-242H541zm427.2-658q-29.2 0-50.2-20.8-21-20.79-21-50 0-29.2 20.8-50.2 20.79-21 50-21 29.2 0 50.2 20.8 21 20.79 21 50 0 29.2-20.8 50.2-20.79 21-50 21M269-496 80-686l42-42 117 117v-269h60v268l119-116 42 42z" /></svg>;
export default MaterialCarFanLowRightFill;