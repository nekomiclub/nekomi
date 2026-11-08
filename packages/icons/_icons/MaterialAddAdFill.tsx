import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAddAdFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M725-160v-135H590v-60h135v-135h60v135h135v60H785v135zm-625 40q-24 0-42-18t-18-42v-615q0-24 18-42t42-18h615q24 0 42 18t18 42v245h-60v-105H100v475h565v60z" /></svg>;
export default MaterialAddAdFill;