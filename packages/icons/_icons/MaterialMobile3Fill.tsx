import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMobile3Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M260-40q-25 0-42.5-17.5T200-100v-760q0-24 18-42t42-18h438q25 0 42.5 17.5T758-860v150q18 3 30 17t12 32v74q0 19-12 33t-30 17v437q0 25-17.5 42.5T698-40zm110-140h218q13 0 21.5-8.5T618-210t-8.5-21.5T588-240H370q-13 0-21.5 8.5T340-210t8.5 21.5T370-180" /></svg>;
export default MaterialMobile3Fill;