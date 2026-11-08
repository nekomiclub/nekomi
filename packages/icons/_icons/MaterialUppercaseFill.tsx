import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialUppercaseFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M670-240v-286l-74 74-42-42 146-146 146 146-42 42-74-74v286zm-510 0 161-440h53l162 440h-52l-43-121H254l-43 121zm110-165h155l-77-217h-2z" /></svg>;
export default MaterialUppercaseFill;