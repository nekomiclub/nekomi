import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGameButtonL2Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-160v-486q0-64 44.5-109T233-800h494q64 0 108.5 45T880-646v486zm405-178h194v-46H545v-2l46-38q42-35 60-64t18-58q0-36-24-56t-67-20q-26 0-48 9t-45 28l26 33q22-17 35-22t32-5q20 0 30.5 9.5T619-543q0 26-17 48t-52 54l-65 61zm-206 0h163v-46H329v-235h-50z" /></svg>;
export default MaterialGameButtonL2Fill;