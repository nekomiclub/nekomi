import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWorkUpdate: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-180v-21.75zv-480zm0 60q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h180v-100q0-23 18-41.5t42-18.5h200q24 0 42 18.5t18 41.5v100h180q24 0 42 18t18 42v225q-14-11-28.5-20T820-472v-188H140v480h334q4 16 10 31t14 29zm240-600h200v-100H380zm204 616q-57-57-57-136t57-136 136-57 136 57 57 136-57 136-136 57-136-57m136-22 113-113-21-21-77 77v-171h-30v171l-77-77-21 21z" /></svg>;
export default MaterialWorkUpdate;