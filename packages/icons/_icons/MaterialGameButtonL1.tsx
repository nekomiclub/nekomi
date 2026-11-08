import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGameButtonL1: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M585-339h48v-282h-40l-91 72 25 33 58-47zm-257 0h173v-46H378v-235h-50zm552-461v486q0 63.52-44.5 108.76T727-160H233q-64 0-108.5-45.24T80-314v-486zm-60 60H140v426q0 38.77 27.32 66.39Q194.64-220 233-220h494q38.36 0 65.68-27.61Q820-275.23 820-314zm0 0H140z" /></svg>;
export default MaterialGameButtonL1;