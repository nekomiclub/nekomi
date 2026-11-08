import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialContactSupportFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m515-80-10-110h-40q-143 0-244-101T120-535t101.5-244T467-880q71 0 131.5 25.5T704-783t70.5 108.5T800-538q0 66-19.5 132T724-280t-90 111-119 89m-21-234q11-11 11-27t-11-27-27-11-27 11-11 27 11 27 27 11 27-11m-54-125h50q0-25 8.5-41.5T534-524t38-49.5 11-48.5q0-45-30.5-74T471-725q-42 0-75 22t-49 60l46 19q11-26 30.5-38.5T468-675q30 0 47 14.5t17 38.5q0 19-11 38.5T482-535q-27 28-34.5 45t-7.5 51" /></svg>;
export default MaterialContactSupportFill;