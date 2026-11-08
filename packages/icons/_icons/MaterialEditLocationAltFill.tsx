import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEditLocationAltFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q39 0 76 9t71 26L402-620v141h141l224-224q16 33 24.5 71t8.5 80q0 100-79.5 217.5T480-80m-18-459v-56l250-250 56 56-250 250zm338-282-56-56 30-30q8-8 19-8t19 8l18 18q8 8 8 19t-8 19z" /></svg>;
export default MaterialEditLocationAltFill;