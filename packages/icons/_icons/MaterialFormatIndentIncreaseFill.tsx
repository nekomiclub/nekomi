import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFormatIndentIncreaseFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-120v-60h720v60zm320-165v-60h400v60zm0-165v-60h400v60zm0-165v-60h400v60zM120-780v-60h720v60zm0 437v-276l141 136z" /></svg>;
export default MaterialFormatIndentIncreaseFill;