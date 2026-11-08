import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSwapCalls: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M230-200 80-350l45-45 75 75v-325q0-65 45-110t110-45 110 45 45 110v289q0 39 28 67t67 28 67-28 28-67v-324l-75 75-45-45 150-150 150 150-45 45-75-75v324q0 65-45 110t-110 45-110-45-45-110v-289q0-39-28-67t-67-28-67 28-28 67v325l75-75 45 45z" /></svg>;
export default MaterialSwapCalls;