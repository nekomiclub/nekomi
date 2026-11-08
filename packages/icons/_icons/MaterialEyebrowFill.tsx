import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEyebrowFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M609-407q-38 0-83 7t-97.5 21.5-114 37T181-288q-10 4-20.5 6t-24.5 2q-48 0-82-33.5T20-395v-109q0-41 26-73t67-40q78-17 146-28.5T387-665t115-11.5 107-3.5q134 0 222 98.5T940-310q1 8-4 14.5T922-285q-9 3-19 1.5t-18-7.5q-70-54-143.5-85T609-407" /></svg>;
export default MaterialEyebrowFill;