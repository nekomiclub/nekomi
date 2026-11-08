import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBrowse: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-425v-355q0-24 18-42t42-18h270v415zm390-415h270q24 0 42 18t18 42v185H510zm0 720v-415h330v355q0 24-18 42t-42 18zM120-365h330v245H180q-24 0-42-18t-18-42zm60-120h210v-295H180zm390-170h210v-125H570zm0 180v295h210v-295zM180-305v125h210v-125z" /></svg>;
export default MaterialBrowse;