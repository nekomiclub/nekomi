import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEarbudsFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M177-177q-57-57-57-138v-423q0-42 36-72t78-30 78 36 36 78q0 46-34 80t-80 34h-54v297q0 57 39 96t96 39 96-39 39-96v-331q0-81 57-137.5T645-840t138 56.5T840-646v411q0 47-28 81t-75 34q-46 0-85.5-34T612-235q0-46 33.5-80t79.5-34h55v-297q0-56-39.5-95T645-780t-95.5 39-39.5 95v331q0 81-57 138t-138 57-138-57" /></svg>;
export default MaterialEarbudsFill;