import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMonorail: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-263h60v123h207v60H243v-60h207zM280-880h400q50 0 85 35t35 85v455q0 44-31 74.5T695-200H570v-120H390v120H265q-44 0-74.5-30.5T160-305v-455q0-50 34.5-85t85.5-35m-60 390v185q0 19 13 32t32 13h65v-120h300v120h65q18 0 31.5-13t13.5-32v-185zm0-210v150h520v-150zm60-120q-26 0-43 17.5T220-760h520q0-25-17.5-42.5T680-820zm-60 330h520zm60-270h460-520z" /></svg>;
export default MaterialMonorail;