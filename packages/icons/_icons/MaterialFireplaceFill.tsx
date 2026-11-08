import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFireplaceFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M414-269q14 11 29.5 16t30.5 5q32 0 57-20t29-55q5-49-31-73.5T473-459q-5 15-4.5 26t2.5 28q3 20 8 34.5t1 33.5q-5 23-23 41.5T414-269M80-80v-800h800v800zm60-60h100v-60h96q-22-26-32.5-58T293-329q0-47 13-89t39.5-79.5 65-69.5 89.5-59q8 54 32.5 96t69.5 80q34 28 49 57t15 67-13 70.5-37 55.5h104v60h100v-680H140z" /></svg>;
export default MaterialFireplaceFill;