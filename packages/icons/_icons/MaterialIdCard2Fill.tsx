import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialIdCard2Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m298-446 141-141-42-43-100 100-54-54-42 42zm-78 126h180v-60H220zm220 0h320v-19q0-42-42.5-68.5T600-434t-117.5 26.5T440-339zm211.5-195.5Q673-537 673-567t-21.5-51.5T600-640t-51.5 21.5T527-567t21.5 51.5T600-494t51.5-21.5M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18z" /></svg>;
export default MaterialIdCard2Fill;