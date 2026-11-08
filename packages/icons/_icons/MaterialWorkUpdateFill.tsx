import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWorkUpdateFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m720-126 113-113-21-21-77 77v-171h-30v171l-77-77-21 21zM380-720h200v-100H380zm204 616q-57-57-57-136t57-136 136-57 136 57 57 136-57 136-136 57-136-57m-444-16q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h180v-100q0-23 18-41.5t42-18.5h200q24 0 42 18.5t18 41.5v100h180q24 0 42 18t18 42v225q-34-28-75-43t-85-15q-104 0-178.5 74.5T467-240q0 35 7.5 62t23.5 58z" /></svg>;
export default MaterialWorkUpdateFill;