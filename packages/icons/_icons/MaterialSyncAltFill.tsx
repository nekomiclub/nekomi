import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSyncAltFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M271-120 80-311l192-192 42 42-120 120h646v60H194l119 119zm418-337-42-42 119-119H120v-60h646L646-798l42-42 192 192z" /></svg>;
export default MaterialSyncAltFill;