import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGrid3x3Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M333-160v-173H160v-60h173v-174H160v-60h173v-173h60v173h174v-173h60v173h173v60H627v174h173v60H627v173h-60v-173H393v173zm60-233h174v-174H393z" /></svg>;
export default MaterialGrid3x3Fill;