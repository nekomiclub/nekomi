import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCirclesExtFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M123.5-163.5Q80-207 80-270t43.5-106.5T230-420t106.5 43.5T380-270t-43.5 106.5T230-120t-106.5-43.5m501 0Q581-207 581-270t43.5-106.5T731-420t106.5 43.5T881-270t-43.5 106.5T731-120t-106.5-43.5m-193-223Q411-407 411-436t20.5-49.5T481-506t49.5 20.5T551-436t-20.5 49.5T481-366t-49.5-20.5m-57-237Q331-667 331-730t43.5-106.5T481-880t106.5 43.5T631-730t-43.5 106.5T481-580t-106.5-43.5" /></svg>;
export default MaterialCirclesExtFill;