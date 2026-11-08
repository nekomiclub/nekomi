import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialShelves: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-40v-880h60v80h600v-80h60v880h-60v-80H180v80zm60-469h110v-160h220v160h270v-271H180zm0 329h270v-160h220v160h110v-269H180zm170-329h100v-100H350zm160 329h100v-100H510zM350-509h100zm160 329h100z" /></svg>;
export default MaterialShelves;