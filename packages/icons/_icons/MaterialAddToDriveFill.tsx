import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAddToDriveFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M264-120q-48 0-88.5-23.5T111-208q-23-41-23.5-87t23.5-87l40-68h180l191 330zm-78-390 142-243q24-41 64-64t88-23q47 0 87 23t64 64l52 88-89 155zM740-40v-120H620v-60h120v-120h60v120h120v60H800v120zM586-378l132-228 90 156q-61-8-119 10t-103 62" /></svg>;
export default MaterialAddToDriveFill;