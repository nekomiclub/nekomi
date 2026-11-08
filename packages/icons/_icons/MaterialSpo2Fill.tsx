import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSpo2Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M486-166q-14 0-24-10t-10-24v-160q0-14 10-24t24-10h100q14 0 24 10t10 24v160q0 14-10 24t-24 10zm14-48h72v-132h-72zM680-80v-110q0-15 9.5-24.5T714-224h98v-48H680v-48h146q15 0 24.5 9.5T860-286v76q0 15-9.5 24.5T826-176h-98v48h132v48zm-300-1q-131-8-215.5-100.5T80-408q0-100 79.5-217.5T400-880q134 114 214.5 220T714-466H440q-25 0-42.5 17.5T380-406z" /></svg>;
export default MaterialSpo2Fill;