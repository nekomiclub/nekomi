import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFlashOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M280-880h400l-80 280h160L632-414l-43-43 57-83H520l81-280H340v114l-60-60zM400-80v-320H280v-194L61-813l43-43 752 752-43 43-252-252zm64-502" /></svg>;
export default MaterialFlashOff;