import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSmartToy: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M147-376q-45 0-76-31.21T40-483t31.21-75.79T147-590v-123q0-24 18-42t42-18h166q0-45 31-76t76-31 76 31.21T587-773h166q24 0 42 18t18 42v123q45 0 76 31.21T920-483t-31.21 75.79T813-376v196q0 24-18 42t-42 18H207q-24 0-42-18t-18-42zm224.5-111.74q11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5 16.76 0 28.26-11.74m274 0q11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5 16.76 0 28.26-11.74M312-285h336v-60H312zM207-180h546v-533H207zm273-267" /></svg>;
export default MaterialSmartToy;