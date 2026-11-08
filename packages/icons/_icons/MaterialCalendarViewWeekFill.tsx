import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCalendarViewWeekFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M566-160q-23.8 0-39.9-16.1T510-216v-528q0-23.8 16.1-39.9T566-800h43q23.8 0 39.9 16.1T665-744v528q0 23.8-16.1 39.9T609-160zm-215 0q-23.8 0-39.9-16.1T295-216v-528q0-23.8 16.1-39.9T351-800h43q23.8 0 39.9 16.1T450-744v528q0 23.8-16.1 39.9T394-160zm-215 0q-23.8 0-39.9-16.1T80-216v-528q0-23.8 16.1-39.9T136-800h43q23.8 0 39.9 16.1T235-744v528q0 23.8-16.1 39.9T179-160zm645 0q-23.8 0-39.9-16.1T725-216v-528q0-23.8 16.1-39.9T781-800h43q23.8 0 39.9 16.1T880-744v528q0 32-16.1 44T824-160z" /></svg>;
export default MaterialCalendarViewWeekFill;