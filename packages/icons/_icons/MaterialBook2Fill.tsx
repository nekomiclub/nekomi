import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBook2Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M290-80q-54 0-92-38t-38-92v-540q0-54 38-92t92-38h510v600q-26 0-43 21t-17 49 17 49 43 21v60zm30-260h60v-480h-60zm-30 200h409q-9-15-14-33t-5-37q0-20 5-37.5t15-32.5H290q-29 0-49.5 20.5T220-210t20.5 49.5T290-140" /></svg>;
export default MaterialBook2Fill;