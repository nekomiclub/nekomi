import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialOpacity: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M253.5-210.5Q160-301 160-434q0-66 25.5-123T255-658l225-222 225 222q44 44 69.5 101T800-434q0 133-93.5 223.5T480-120t-226.5-90.5M223-400h514q13-69-15-127t-56-85L480-795 294-612q-28 27-56 85t-15 127" /></svg>;
export default MaterialOpacity;