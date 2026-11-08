import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMilitaryTechFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M280-880h400v333q0 23-11.5 42T637-474l-141 82 26 97h134l-109 81 42 134-109-81-110 81 42-134-109-81h135l25-97-140-82q-20-12-31.5-31T280-547zm174 60v350l30 16 30-16v-350z" /></svg>;
export default MaterialMilitaryTechFill;