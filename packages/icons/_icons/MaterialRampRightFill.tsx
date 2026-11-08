import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRampRightFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M448-120v-267q-33 45-84.5 88.5T248-221l-42-42q62-37 107.5-72.5t75.5-73 44.5-79T448-580v-146l-90 90-42-42 162-162 162 162-42 42-90-90v606z" /></svg>;
export default MaterialRampRightFill;