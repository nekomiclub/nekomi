import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSwapVertFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M323-450v-316L202-645l-42-42 193-193 193 193-42 42-121-121v316zM607-80 414-273l42-42 121 121v-316h60v316l121-121 42 42z" /></svg>;
export default MaterialSwapVertFill;