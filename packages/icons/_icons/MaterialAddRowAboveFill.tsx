import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAddRowAboveFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-80v-329h720v329zm0-389v-331h152q-1 7.5-1.5 14.62-.5 7.13-.5 15.38 0 88 60.9 149T480-560t149.1-61.5T690-770q0-8.25-.5-15.38-.5-7.12-1.5-14.62h152v331zm330-191v-80h-80v-60h80v-80h60v80h80v60h-80v80z" /></svg>;
export default MaterialAddRowAboveFill;