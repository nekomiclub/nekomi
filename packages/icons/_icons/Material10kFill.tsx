import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const Material10kFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M286-360h50v-240H180v50h106zm120 0h104q14 0 23.5-9.5T543-393v-173q0-14-9.5-24T510-600H406q-14 0-23.5 10t-9.5 24v173q0 14 9.5 23.5T406-360m17-50v-140h70v140zm157 50h50v-90l84 90h66L668-480l112-120h-66l-84 90v-90h-50zM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18z" /></svg>;
export default Material10kFill;