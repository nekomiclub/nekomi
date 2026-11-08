import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBatteryErrorFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m670-80-42-42 84-84-84-84 42-42 84 84 84-84 42 42-83 84 83 84-42 42-84-83zm-360 0q-13 0-21.5-8.5T280-110v-676q0-13 8.5-21.5T310-816h90v-64h160v64h90q13 0 21.5 8.5T680-786v382q-63 23-100.5 76.5T542-207q0 35 10.5 67T584-80z" /></svg>;
export default MaterialBatteryErrorFill;