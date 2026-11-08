import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialManageSearch: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-200v-60h400v60zm0-210v-60h200v60zm0-210v-60h200v60zm758 420L678-360q-26 20-56 30t-62 10q-83 0-141.5-58.5T360-520t58.5-141.5T560-720t141.5 58.5T760-520q0 32-10 62t-30 56l160 160zM559.76-380Q618-380 659-420.76q41-40.77 41-99Q700-578 659.24-619q-40.77-41-99-41Q502-660 461-619.24q-41 40.77-41 99Q420-462 460.76-421q40.77 41 99 41" /></svg>;
export default MaterialManageSearch;