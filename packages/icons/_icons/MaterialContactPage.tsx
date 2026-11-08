import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialContactPage: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-400q33 0 56.5-23.5T560-480t-23.5-56.5T480-560t-56.5 23.5T400-480t23.5 56.5T480-400M320-240h320v-23q0-24-13-44t-36-30q-26-11-53.5-17t-57.5-6-57.5 6-53.5 17q-23 10-36 30t-13 44zM740-80H220q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h341l239 239v501q0 24-18 42t-42 18m0-60v-474L534-820H220v680zm-520 0v-680z" /></svg>;
export default MaterialContactPage;