import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMeasuringTapeFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M200-160v-340q0-142 99-241t241-99 241 99 99 241-99 241-241 99zm439-241q41-41 41-99t-41-99-99-41-99 41-41 99 41 99 99 41 99-41m-155.5-42.26q-23.5-23.27-23.5-56.5 0-33.24 23.26-56.74 23.27-23.5 56.5-23.5 33.24 0 56.74 23.26 23.5 23.27 23.5 56.5 0 33.24-23.26 56.74-23.27 23.5-56.5 23.5-33.24 0-56.74-23.26M80-160v-200h60v200z" /></svg>;
export default MaterialMeasuringTapeFill;