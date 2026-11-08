import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialComputerCancelFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M40-120v-60h880v60zm100-120q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h680q24 0 42 18t18 42v480q0 24-18 42t-42 18zm218-136 122-122 122 122 42-42-122-122 122-122-42-42-122 122-122-122-42 42 122 122-122 122z" /></svg>;
export default MaterialComputerCancelFill;