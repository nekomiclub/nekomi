import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialArticlePersonFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M277-621h406v-60H277zm-97 501q-25 0-42.5-17.5T120-180v-600q0-25 17.5-42.5T180-840h600q25 0 42.5 17.5T840-780v345q0-64-45.5-109T684-589q-42 0-78.5 21T549-510H277v60h254q-3 30 5 59t27 52H277v60h198q-24 20-35.5 48.5T428-171v51zm308 0v-51q0-26 11-44.5t31-28.5q37-19 75-28t79-9 79 8.5 75 28.5q20 9 31 28t11 45v51zm129.5-248.5Q590-396 590-435t27.5-66.5T684-529t66.5 27.5T778-435t-27.5 66.5T684-341t-66.5-27.5" /></svg>;
export default MaterialArticlePersonFill;