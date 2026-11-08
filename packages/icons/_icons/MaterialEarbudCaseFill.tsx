import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEarbudCaseFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-492v218q0 63.52 45.24 108.76T274-120h413q64 0 108.5-45.24T840-274v-218H675v105q0 24.75-17.62 42.37Q639.75-327 615-327H345q-24.75 0-42.37-17.63Q285-362.25 285-387v-105zm225 0v105h270v-105zm-225-60h720v-135q0-63.11-44.94-108.06Q750.11-840 687-840H274q-63.52 0-108.76 44.5T120-687z" /></svg>;
export default MaterialEarbudCaseFill;