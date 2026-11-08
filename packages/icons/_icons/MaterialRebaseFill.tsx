import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRebaseFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m430-45-42-42 83-83H316q-10 39-42 64.5T200-80q-50 0-85-35t-35-85q0-42 25.5-74t64.5-42v-328q-39-10-64.5-42T80-760q0-50 35-85t85-35q42 0 74 25.5t42 64.5h155l-83-83 42-42 156 155-156 155-42-42 83-83H316q-8 32-31 55t-55 31v328q32 8 55 31t31 55h155l-83-83 42-42 156 155zm245-70q-35-35-35-85 0-42 25.5-74t64.5-42v-328q-39-10-64.5-42T640-760q0-50 35-85t85-35 85 35 35 85q0 42-25.5 74T790-644v328q39 10 64.5 42t25.5 74q0 50-35 85t-85 35-85-35" /></svg>;
export default MaterialRebaseFill;