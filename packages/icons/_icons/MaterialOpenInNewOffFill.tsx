import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialOpenInNewOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m813-61-59-59H180q-24 0-42-18t-18-42v-574l-59-59 43-43 752 752zM180-180h514L459-416l-77 77-42-43 76-76-236-236zm86-600-60-60h253v60zm279 278-43-42 236-236H519v-60h321v321h-60v-218zm295 296-60-60v-193h60z" /></svg>;
export default MaterialOpenInNewOffFill;