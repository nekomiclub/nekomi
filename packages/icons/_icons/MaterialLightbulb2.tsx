import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLightbulb2: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M385-240q-24.75 0-42.37-17.63Q325-275.25 325-300v-67q-59.37-40.02-92.19-102.61Q200-532.2 200-603q0-115.75 82-196.37Q364-880 480.5-880t198 81.5T760-600q0 71-33 132.5T635-367v67q0 24.75-17.62 42.37Q599.75-240 575-240zm5-60h180v-94l36-25q44.81-30.95 69.41-79.03Q700-546.11 700-600.26 700-692 636-756t-156-64-156 64.61-64 156.27q0 54.12 24.59 101.78Q309.19-449.68 354-419l36 24.62zm7 220q-12.75 0-21.37-8.63Q367-97.25 367-110v-30h227v30.18q0 12.82-8.62 21.32Q576.75-80 564-80zm83-520" /></svg>;
export default MaterialLightbulb2;