import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const Material360Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m357-167-43-43 80-81q-136-15-225-66T80-486q0-79 116.5-134.5T480-676q168 0 284 55.5T880-486q0 59-64 104t-170 70v-65q80-20 127-52t47-57q0-32-83.5-81T480-616q-172 0-256 49t-84 81q0 45 57.5 77.5T397-349l-83-81 43-43 153 152z" /></svg>;
export default Material360Fill;