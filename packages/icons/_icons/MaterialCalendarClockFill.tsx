import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCalendarClockFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-80q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v277q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37v-87H180v430h306q12.75 0 21.38 8.68 8.62 8.67 8.62 21.5 0 12.82-8.62 21.32Q498.75-80 486-80zm417.5-15.5Q542-151 542-229t55.5-133.5T731-418t133.5 55.5T920-229 864.5-95.5 731-40 597.5-95.5M789.24-128 817-156l-75-75v-112h-39v126z" /></svg>;
export default MaterialCalendarClockFill;