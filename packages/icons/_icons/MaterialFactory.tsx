import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFactory: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-80v-481l280-119v80l200-81v121h320v480zm60-60h680v-359.8H500V-592l-200 80v-79l-160 71zm310-100h60v-160h-60zm-160 0h60v-160h-60zm320 0h60v-160h-60zm270-320H700l40-320h100zM140-140h680z" /></svg>;
export default MaterialFactory;