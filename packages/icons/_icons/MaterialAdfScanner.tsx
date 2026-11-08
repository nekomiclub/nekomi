import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAdfScanner: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-160v-218q0-45 27.5-72.5T180-478h62v-322h476v322h62q45 0 72.5 27.5T880-378v218zm222-318h356v-262H302zM140-220h680v-158q0-20-10-30t-30-10H180q-20 0-30 10t-10 30zm599.18-103q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5M140-418h680z" /></svg>;
export default MaterialAdfScanner;