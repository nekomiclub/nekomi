import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGarageHome: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-120v-480l320-240 320 240v480h-60v-450L480-765 220-570v450zm180-60h280v-110H340zm0-170h280v-110H340zm-60 230v-400h400v400z" /></svg>;
export default MaterialGarageHome;