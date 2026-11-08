import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFamilyHomeFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m480-841 440 328-34 47-86-65v411H160v-411l-86 65-34-47zM310-478q0 48 52 109t118 120q66-59 118-120t52-109q0-39-25.5-64.5T560-568q-23 0-44 11.5T480-529q-15-16-36-27.5T400-568q-39 0-64.5 25.5T310-478" /></svg>;
export default MaterialFamilyHomeFill;