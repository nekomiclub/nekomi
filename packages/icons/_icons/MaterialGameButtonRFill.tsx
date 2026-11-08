import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGameButtonRFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M373-340h50v-109h43l64 109h58l-77-124q26-11 39-29t13-44q0-41-26-62.5T460-621h-87zm50-153v-83h35q26 0 40 11t14 31-15 30.5-44 10.5zM80-160v-486q0-64 44.5-109T233-800h494q64 0 108.5 45T880-646v486z" /></svg>;
export default MaterialGameButtonRFill;