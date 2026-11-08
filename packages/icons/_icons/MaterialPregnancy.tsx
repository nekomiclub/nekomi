import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPregnancy: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M411-80v-180h-91v-314q0-50 28-78t78-28q49 0 75.5 33t26.5 73q52 6 82 41.5t30 89.5v183H485v180zm-36.5-675.5Q353-777 353-807t21.5-51.5T426-880t51.5 21.5T499-807t-21.5 51.5T426-734t-51.5-21.5" /></svg>;
export default MaterialPregnancy;