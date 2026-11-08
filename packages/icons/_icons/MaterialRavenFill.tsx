import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRavenFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M391-244 324-83l-55-23 60-145q-110-24-179.5-111.5T80-562v-165q0-64 45-108.5T234-880q17 0 33 4t32 11l234 97-146 54v76l330 210H398q-45 0-77.5-28.5T288-528h-60q0 68 50.5 114T398-368h414l28 18 40 190h-80l-38-84H552v164h-60v-164zM212.5-747.5Q204-739 204-726t8.5 21.5T234-696t21-8.5 8-21.5-8-21.5-21-8.5-21.5 8.5" /></svg>;
export default MaterialRavenFill;