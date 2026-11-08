import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHomeMiniFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M628-741.5q72 18.5 128 54t90 87.5 34 120H80q0-68 34-120t90-87.5 128-54T480-760t148 18.5M350-200q-97 0-170-62.5T87-420h786q-22 97-98 158.5T600-200z" /></svg>;
export default MaterialHomeMiniFill;