import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const Material1xMobiledata: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M242-280v-340h-82v-60h142v400zm195 0 127-213-113-187h70l79 130 75-130h69L636-493l124 213h-69l-91-156-93 156z" /></svg>;
export default Material1xMobiledata;