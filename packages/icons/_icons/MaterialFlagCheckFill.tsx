import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFlagCheckFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M200-120v-680h284q-7 20-10 39.5t-3 39.5q0 110 76 182t178 72q19 0 37.5-2.5T800-478v134H544l-19-85H260v309zm662.5-738.5Q919-802 919-721t-56.5 137.5T725-527t-137.5-56.5T531-721t56.5-137.5T725-915t137.5 56.5M698-636l141-142-28-28-113 114-59-60-28 29z" /></svg>;
export default MaterialFlagCheckFill;