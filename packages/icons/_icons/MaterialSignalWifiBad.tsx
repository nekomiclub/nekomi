import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSignalWifiBad: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m676-140-42-42 84-84-84-84 42-42 84 84 84-84 43 42-84 84 83 84-42 42-84-83zm-196 20L0-600q99-94 221-147t259-53 259 53 221 147L785-425l-20.5-20.5L744-466l128-128q-87-68-184.5-107T480-740t-207.5 39T88-594l392 392 80-80 20.5 20.5L601-241zm0-351" /></svg>;
export default MaterialSignalWifiBad;