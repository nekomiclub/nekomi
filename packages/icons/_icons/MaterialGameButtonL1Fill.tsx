import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGameButtonL1Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M585-339h48v-282h-40l-91 72 25 33 58-47zm-257 0h173v-46H378v-235h-50zm552-461v486q0 64-44.5 109T727-160H233q-64 0-108.5-45T80-314v-486z" /></svg>;
export default MaterialGameButtonL1Fill;