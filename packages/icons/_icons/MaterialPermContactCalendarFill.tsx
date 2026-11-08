import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPermContactCalendarFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-180q58-57 135.5-88.5T480-300t164 31.5T780-180v-580H180zm203.5-253.5Q344-473 344-530t39.5-96.5T480-666t96.5 39.5T616-530t-39.5 96.5T480-394t-96.5-39.5M180-80q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18z" /></svg>;
export default MaterialPermContactCalendarFill;