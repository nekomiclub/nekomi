import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTsvFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M245-357h50v-196h58v-50H186v50h59zm138 0h127q14.03 0 23.51-9.49Q543-375.98 543-390v-78q0-13-9.49-22-9.48-9-23.51-9h-77v-54h110v-50H416q-14.02 0-23.51 9.49Q383-584.03 383-570v78q0 14 9.49 23.5T416-459h77v52H383zm258 0h57l75-246h-50l-53 183-47-183h-50zM140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18z" /></svg>;
export default MaterialTsvFill;