import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialIosShareFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M220-80q-24 0-42-18t-18-42v-469q0-24 18-42t42-18h169v60H220v469h520v-469H569v-60h171q24 0 42 18t18 42v469q0 24-18 42t-42 18zm229-267v-457l-88 88-43-43 161-161 161 161-43 43-88-88v457z" /></svg>;
export default MaterialIosShareFill;