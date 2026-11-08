import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFilter8: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M485-338h110q24 0 42-18t18-42v-95q0-27-14.5-43T606-552q20 0 34.5-13.5T655-606v-99q0-24-18-42t-42-18H485q-24 0-42 18t-18 42v99q0 27 15 40.5t35 13.5q-20 0-35 16t-15 43v95q0 24 18 42t42 18m0-367h110v123H485zm0 307v-124h110v124zM260-200q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18zm0-60h560v-560H260zM140-80q-24 0-42-18t-18-42v-620h60v620h620v60zm120-740v560z" /></svg>;
export default MaterialFilter8;