import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMobiledataArrowsFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M318-578h60v342l79-79 43 43-152 152-152-152 43-43 79 79zm313 207h-60v-353l-79 79-43-43 152-152 152 152-43 43-79-79z" /></svg>;
export default MaterialMobiledataArrowsFill;