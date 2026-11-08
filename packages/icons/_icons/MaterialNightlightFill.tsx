import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNightlightFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M560-80q-82 0-155-31.5t-127.5-86-86-127.5T160-480.5t31.5-155 86-127 127.5-86T560-880q54 0 105 14t95 40q-91 53-145.5 143.5T560-480t54.5 202.5T760-134q-44 26-95 40T560-80" /></svg>;
export default MaterialNightlightFill;