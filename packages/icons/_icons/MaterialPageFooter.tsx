import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPageFooter: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-120v-60h720v60zm60-160q-24 0-42-18t-18-42v-440q0-24 18-42t42-18h600q24 0 42 18t18 42v440q0 24-18 42t-42 18zm0-60h600v-440H180zm0 0v-440z" /></svg>;
export default MaterialPageFooter;