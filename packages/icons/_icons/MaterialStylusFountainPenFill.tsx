import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStylusFountainPenFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M307-326h346l87-357-230-210v225q14 8 23 22.06t9 30.94q0 25.27-18.22 43.14-18.22 17.86-44 17.86T436-571.86q-18-17.87-18-43.14 0-16.88 9-30.94T450-668v-225L220-683zM160-120l21.27-57.06Q189-199 207.84-212.5T250-226h460q23.32 0 42.16 13.5t26.57 35.44L800-120z" /></svg>;
export default MaterialStylusFountainPenFill;