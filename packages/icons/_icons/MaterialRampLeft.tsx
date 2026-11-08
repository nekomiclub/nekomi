import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRampLeft: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M452-120v-606l-90 90-42-42 162-162 162 162-42 42-90-90v146q0 51 14.5 92.5t44.5 79 75.5 73T754-263l-42 42q-64-34-115.5-77.5T512-387v267z" /></svg>;
export default MaterialRampLeft;