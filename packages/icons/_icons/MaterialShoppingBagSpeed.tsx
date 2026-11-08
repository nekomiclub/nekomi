import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialShoppingBagSpeed: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m53-250 15-60h199l-15 60zm80-160 15-60h239l-15 60zm625 270 7-50 19-160 22-180 16-130zM211-80q-24 0-38.5-18T158-140h600l64-520H682l-11 90q-2 13-11.5 21.5T637-540q-12 0-20-9t-6-21l11-90H442l-11 90q-2 13-11.5 21.5T397-540q-12 0-20-9t-6-21l11-90H222q3-26 22-43t45-17h100l2-10q9-72 52.5-111T559-880q61 0 99.5 48.5T689-720h140q24 0 40 18t13 42l-64 520q-3 26-22 43t-45 17zm238-640h180q5-39-17.5-69.5T552-820q-43 0-69.5 23.5T451-730z" /></svg>;
export default MaterialShoppingBagSpeed;