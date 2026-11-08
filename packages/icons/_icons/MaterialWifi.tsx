import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWifi: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M417-154q-27-27-27-63t27-63 63-27 63 27 27 63-27 63-63 27-63-27M232-357l-63-63q70-70 146.5-105T480-560t164.5 35T791-420l-63 63q-61-61-123-87t-125-26-125 26-123 87M63-526 0-589q93-95 216.5-153T480-800t263.5 58T960-589l-63 63q-88-84-192.5-134T480-710t-224.5 50T63-526" /></svg>;
export default MaterialWifi;