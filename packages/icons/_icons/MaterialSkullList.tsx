import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSkullList: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M163-240v-76q-55-33-89-87.13T40-521q0-102 75.53-170.5 75.52-68.5 179.5-68.5Q399-760 475-691.5T551-521q0 63.74-34 117.87T428-316v76zm60-60h145v-51l35-21q40-23 64-62.25 24-39.26 24-86.36Q491-598 432.5-649T295-700t-137 50.91q-58 50.9-58 128.1Q100-474 124-435t64 63l35 21zm-9.82-191q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5M266-400h60l-30-60zm111.18-91q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5M614-449v-60h266v60zm0 160v-60h266v60zm0-320v-60h266v60zM296-500" /></svg>;
export default MaterialSkullList;