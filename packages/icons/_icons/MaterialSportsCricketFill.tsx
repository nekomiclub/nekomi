import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSportsCricketFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M579-390 479-290q-10 10-25.5 10T428-290L90-628q-10-10-10-23t10-23l100-100q10-10 25.5-13t25.5 7l338 338q10 10 10 26t-10 26M749-84 573-260l44-44 176 176zm-90.5-573.5Q621-695 621-750t37.5-92.5T751-880t92.5 37.5T881-750t-37.5 92.5T751-620t-92.5-37.5" /></svg>;
export default MaterialSportsCricketFill;