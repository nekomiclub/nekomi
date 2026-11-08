import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLabProfile: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M320-490v-60h320v60zm0-160v-60h320v60zM220-390h320q26.43 0 49.22 12Q612-366 628-346l112 146v-620H220zm0 250h490L581-309q-7.57-9.88-18.28-15.44Q552-330 540-330H220zm520 60H220q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h520q24 0 42 18t18 42v680q0 24-18 42t-42 18m-520-60v-680zm0-190v-60z" /></svg>;
export default MaterialLabProfile;