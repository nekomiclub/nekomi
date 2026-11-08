import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHPlusMobiledata: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-280v-400h60v170h272v-170h60v400h-60v-170H220v170zm575-85v-85h-85v-60h85v-85h60v85h85v60h-85v85z" /></svg>;
export default MaterialHPlusMobiledata;