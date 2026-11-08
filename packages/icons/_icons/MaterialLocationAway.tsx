import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLocationAway: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-120v-480l320-240 240 180q-20 0-40 4.5T563-643L400-765 140-570v390h200v60zm320 0v-76q0-21 10.5-39.5T439-265q46-27 96.5-41T640-320t104.5 14 96.5 41q18 11 28.5 29.5T880-196v76zm60-60h360v-29q-42-24-87.23-37.5Q687.55-260 640-260t-92.77 14Q502-232 460-208zm95-215q-35-35-35-85t35-85 85-35 85 35 35 85-35 85-85 35-85-35m127.5-42.5Q700-455 700-480t-17.5-42.5T640-540t-42.5 17.5T580-480t17.5 42.5T640-420t42.5-17.5M640-180" /></svg>;
export default MaterialLocationAway;