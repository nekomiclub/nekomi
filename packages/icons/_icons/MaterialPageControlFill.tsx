import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPageControlFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M93.5-423.5Q70-447 70-480t23.5-56.5T150-560t56.5 23.5T230-480t-23.5 56.5T150-400t-56.5-23.5M174-456q10-10 10-24t-10-24-24-10-24 10-10 24 10 24 24 10 24-10m139.5 32.5Q290-447 290-480t23.5-56.5T370-560t56.5 23.5T450-480t-23.5 56.5T370-400t-56.5-23.5M394-456q10-10 10-24t-10-24-24-10-24 10-10 24 10 24 24 10 24-10m139.5 32.5Q510-447 510-480t23.5-56.5T590-560t56.5 23.5T670-480t-23.5 56.5T590-400t-56.5-23.5M614-456q10-10 10-24t-10-24-24-10-24 10-10 24 10 24 24 10 24-10m139.5 32.5Q730-447 730-480t23.5-56.5T810-560t56.5 23.5T890-480t-23.5 56.5T810-400t-56.5-23.5" /></svg>;
export default MaterialPageControlFill;