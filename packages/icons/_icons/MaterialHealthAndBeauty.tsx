import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHealthAndBeauty: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M197-80 40-512l206-121v-246h124v246l206 121L419-80zm484 0q-12 0-21-9t-9-21 9-21 21-9h145v-104H681q-12 0-21-9t-9-21 9-21 21-9h145v-104H681q-12 0-21-9t-9-21 9-21 21-9h145v-104H681q-12 0-21-9t-9-21 9-21 21-9h145v-104H681q-12 0-21-9t-9-21 9-21 21-9h166q31 0 52 21t21 52v570q0 31-21 52t-52 21zm-441-60h136l125-345-147-86h-92l-147 86zm68-216" /></svg>;
export default MaterialHealthAndBeauty;