import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialScoreFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm306-366h50v-240h-50zm104 0h59l-53-127 53-113h-59l-54 120zm-317 0h153v-50H323v-49h103v-141H273v50h103v41H273zm507 35v-85L520-276 353-443 180-270v85l173-173 167 167z" /></svg>;
export default MaterialScoreFill;