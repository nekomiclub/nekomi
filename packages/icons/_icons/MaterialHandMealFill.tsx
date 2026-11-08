import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHandMealFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M40-509v-60h93q29-109 115.5-183T450-836v-44h60v44q115 10 201.5 84T827-569h93v60zm270 389v-329h318q15 0 25 8.5t14 19.5q5 11 1.5 24T654-375l-57 47H430v60h191l106-89q18-14 39.5-20.5T809-382q22 2 42.5 11.5T889-344L676-156q-21 19-47 27.5t-54 8.5zM110-79q-13 0-21.5-8.5T80-109v-310q0-12 8.5-21t21.5-9h140v340q0 13-9 21.5T220-79z" /></svg>;
export default MaterialHandMealFill;