import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBlinds2ClosedFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M192-880h576q46.67 0 79.33 32.67Q880-814.67 880-768v112h-79.89v576H161v-576H80v-112q0-46.67 32.67-79.33Q145.33-880 192-880m22 740h533l-74-105h-40v11q0 12.75-8.62 21.37Q615.75-204 603-204q-12 0-21-8.63-9-8.62-9-21.37v-11H288zm419-411h114l-74-105h-40zm0 206h114l-74-105h-40zm-419 0h359v-105H288zm0-206h359v-105H288z" /></svg>;
export default MaterialBlinds2ClosedFill;