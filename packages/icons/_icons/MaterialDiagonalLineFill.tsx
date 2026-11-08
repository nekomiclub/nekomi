import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDiagonalLineFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M768.47-80Q722-80 689-112.67q-33-32.66-33-79.33 0-15.05 3.5-29.02Q663-235 670-247L247-671q-12 7-25.98 11-13.97 4-29.02 4-46 0-79-33t-33-79 32.53-79 79-33T271-847.33q33 32.66 33 79.33 0 15.05-4 29.03Q296-725 289-713l423 424q12-7 26-11t30-4q46.67 0 79.33 32.53 32.67 32.53 32.67 79T847.47-113t-79 33" /></svg>;
export default MaterialDiagonalLineFill;