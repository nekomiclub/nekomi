import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialListsFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-160v-173h173v173zm233 0v-173h567v173zM80-393v-174h173v174zm233 0v-174h567v174zM80-627v-173h173v173zm233 0v-173h567v173z" /></svg>;
export default MaterialListsFill;