import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAddColumnLeftFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M551-120v-720h329v720zm-391 0v-152q7.5 1 14.63 1.5 7.12.5 15.37.5 88 0 149-60.9T400-480t-61.5-149.1T190-690q-8.25 0-15.37.5-7.13.5-14.63 1.5v-152h331v720zm0-250v-80H80v-60h80v-80h60v80h80v60h-80v80z" /></svg>;
export default MaterialAddColumnLeftFill;