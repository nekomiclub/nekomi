import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTabRecentFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m801-139 27-27-84-76v-124h-42v136zM520-560h300v-180H520zm71 456q-57-57-57-136t57-136 136-57 136 57 57 136-57 136-136 57-136-57m-451-56q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v298q-33-26-71.5-38.5T728-493q-106 0-180 74t-74 180q0 19 3.5 40t9.5 39z" /></svg>;
export default MaterialTabRecentFill;