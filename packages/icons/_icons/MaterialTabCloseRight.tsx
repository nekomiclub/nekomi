import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTabCloseRight: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m366-324 114-114 114 114 42-42-114-114 114-114-42-42-114 114-114-114-42 42 114 114-114 114zM180-180v-600zv-7zm0 60q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v398q-14.17-5-29.08-7.5Q796-392 780-393v-387H180v600h387q1 16 3.5 30.92Q573-134.17 578-120zm594 80-42-42 73-74H624v-60h181l-73-74 42-42 146 146z" /></svg>;
export default MaterialTabCloseRight;