import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMovieSpeaker: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-220v-368zm0 60q-24 0-42-18t-18-42v-520q0-24 18-42t42-18l74 152h130l-74-152h89l74 152h130l-74-152h89l74 152h130l-74-152h112q24 0 42 18t18 42v152H140v368h200v60zm488 82L519-187H400v-144h119l109-109zm100 53v-61q59-16 95.5-64T860-259t-36.5-109-95.5-64v-61q85 14 139 80.5T921-259t-54 153-139 81m0-159v-150q19 12 30.5 31.5T770-259t-11.5 43.5T728-184" /></svg>;
export default MaterialMovieSpeaker;