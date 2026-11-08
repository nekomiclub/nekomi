import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBeachAccessFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M795-128 532-391l46-46 263 263zm-570-46q-88-97-102-223t43-236q2 33 14.5 73.5T216-475t55 91 72 92zm159-159q-49-50-85-106.5t-54.5-109T226-645t22-68q24-26 69.5-27T418-723t113 53.5T636-585zm293-293q-44-40-90.5-72t-92-54.5T407-787t-76-13q111-60 239-46t225 102z" /></svg>;
export default MaterialBeachAccessFill;