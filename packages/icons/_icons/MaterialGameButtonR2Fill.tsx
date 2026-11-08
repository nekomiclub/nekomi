import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGameButtonR2Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-160v-486q0-64 44.5-109T233-800h494q64 0 108.5 45T880-646v486zm183-178h50v-109h43l64 109h58l-77-124q26-11 39-29t13-44q0-41-26-62.5T350-619h-87zm50-153v-83h35q26 0 40 11t14 31-15 30.5-44 10.5zm202 153h194v-46H575v-2l46-38q42-35 60-64t18-58q0-36-24-56t-67-20q-26 0-48 9t-45 28l26 33q22-17 35-22t32-5q20 0 30.5 9.5T649-543q0 26-17 48t-52 54l-65 61z" /></svg>;
export default MaterialGameButtonR2Fill;