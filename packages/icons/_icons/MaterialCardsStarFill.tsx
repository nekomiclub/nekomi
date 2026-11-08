import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCardsStarFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m478-449 91-55 91 55-24-104 80-69-105-9-42-98-42 98-105 9 80 69zM213-81q-25 3-44.5-11.5T146-132L82-630q-3-25 12-45t40-23l64-7v387q0 50 34.5 85t84.5 35h489q0 20-12 34.5T762-147zm105-177q-24 0-42-18t-18-42v-502q0-24 18-42t42-18h502q24 0 42 18t18 42v502q0 24-18 42t-42 18z" /></svg>;
export default MaterialCardsStarFill;