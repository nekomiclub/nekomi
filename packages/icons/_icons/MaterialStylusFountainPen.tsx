import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStylusFountainPen: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m307-326-87-357 260-237 260 237-87 357zm47-60h252l68-277-164-148v143q14 8 23 22t9 31q0 25-18 43t-44 18-44-18-18-43q0-17 9-31t23-22v-143L286-663zM160-120l21-57q8-22 27-35.5t42-13.5h460q23 0 42 13.5t27 35.5l21 57z" /></svg>;
export default MaterialStylusFountainPen;