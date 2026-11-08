import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialColorsFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M348-138 98-388q-9-9.12-13.5-20.06T80-430.7t4.5-22.5T98-473l250-250-114-114 43-43 406 407q9.47 9 13.74 19.8 4.26 10.8 4.26 22.5t-4.26 22.64Q692.47-397.12 683-388L433-138q-9 9-19.8 13.5t-22.5 4.5-22.64-4.5T348-138m43-542L141-430h500zm408.66 560q-33.35 0-56.5-23.18Q720-166.36 720-200q0-26.28 10-49.64T756-293l44-57 44 57q15 20 25.5 43.36T880-200q0 33.64-23.5 56.82T799.66-120" /></svg>;
export default MaterialColorsFill;