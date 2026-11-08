import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialViewCarouselFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-355v-250q0-29 20.5-49.5T150-675t49.5 20.5T220-605v250q0 29-20.5 49.5T150-285t-49.5-20.5T80-355m260 155q-24 0-42-18t-18-42v-440q0-24 18-42t42-18h280q24 0 42 18t18 42v440q0 24-18 42t-42 18zm400-155v-250q0-29 20.5-49.5T810-675t49.5 20.5T880-605v250q0 29-20.5 49.5T810-285t-49.5-20.5T740-355" /></svg>;
export default MaterialViewCarouselFill;