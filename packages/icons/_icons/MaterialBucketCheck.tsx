import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBucketCheck: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M260-120q-26.35 0-45.68-16.5Q195-153 191-179l-71-496h123v-105q0-24.75 17.63-42.38Q278.25-840 303-840h355q24.75 0 42.38 17.62Q718-804.75 718-780v105h123l-71 496q-4 26-23.5 42.5T701-120zm-71-495 63 435h458.12L772-615zm248 325 189-188-43-43-146 146-59-58-42 42zM303-675h355v-105H303zm178 277" /></svg>;
export default MaterialBucketCheck;