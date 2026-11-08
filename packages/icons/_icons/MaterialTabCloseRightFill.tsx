import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTabCloseRightFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m774-40-42-42 73-74H624v-60h181l-73-74 42-42 146 146zm-594-80q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v398q-17-5-33.5-8t-33.5-3q-35 0-65.5 11T651-351L522-480l114-114-42-42-114 114-114-114-42 42 114 114-114 114 42 42 114-114 129 129-21 47.5Q567-214 567-180q1 16 3.5 31t7.5 29z" /></svg>;
export default MaterialTabCloseRightFill;