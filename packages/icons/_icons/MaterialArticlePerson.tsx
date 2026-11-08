import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialArticlePerson: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-180v-600 224-33zm97-270h253.7q2.3-16 6.3-31t12-29H277zm0 171h198q17-14 36.5-23.5T552-319v-20H277zm0-342h406v-60H277zm-97 501q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v345q0-37-16.5-68.5T780-556v-224H180v600h248v60zm437.5-248.5Q590-396 590-435t27.5-66.5T684-529t66.5 27.5T778-435t-27.5 66.5T684-341t-66.5-27.5M488-120v-51q0-26 11-44.5t31-28.5q37-19 75-28t79-9 79 8.5 75 28.5q20 9 31 28t11 45v51z" /></svg>;
export default MaterialArticlePerson;