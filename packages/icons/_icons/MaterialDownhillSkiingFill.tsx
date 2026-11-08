import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDownhillSkiingFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M741-40q-24 0-48-4t-47-11L81-261l13-38 289 105 70-181-159-166q-23-26-18-59t34-50l155-90q14-8 30-8.5t30 4.5 25.5 16 16.5 26l13 43q17 54 49.5 87t79.5 49l21-64 38 11-39 121q-68-14-119-54t-78-108l-132 76 124 145-85 222 143 52 94-292q10 3 19 5.5t18 4.5l-94 296 41 14q19 7 39 10.5t42 3.5q29 0 56-5.5t53-18.5l30 30q-33 17-67 25.5T741-40M616.5-735.5Q595-757 595-787t21.5-51.5T668-860t51.5 21.5T741-787t-21.5 51.5T668-714t-51.5-21.5" /></svg>;
export default MaterialDownhillSkiingFill;