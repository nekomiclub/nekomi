import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCreditCardClockFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m798-137 28-28-95-95v-132h-39v146zM720-35q-93 0-158.5-65T496-258t65.5-158.5T720-482t158 65.5T943-258t-65 158-158 65M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v253q-14-10-29-18t-31-15v-111H140v129h435q-63 37-101 100.5T436-260q0 26 4.5 51.5T454-160z" /></svg>;
export default MaterialCreditCardClockFill;