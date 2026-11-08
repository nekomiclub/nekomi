import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMonorailFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-263h60v123h207v60H243v-60h207zM280-880h400q49.5 0 84.75 35.25T800-760v455q0 44.25-30.75 74.62Q738.5-200 695-200H570v-120H390v120H265q-44.25 0-74.62-30.38Q160-260.75 160-305v-455q0-49.5 34.5-84.75T280-880m-60 180v150h520v-150z" /></svg>;
export default MaterialMonorailFill;