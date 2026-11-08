import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGastroenterologyFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-80v-240q0-46 32-78t78-32h80q75 0 102.5-33t27.5-77q0-32-17.5-51T380-610t-42.5-17.5T320-670v-210h240v90q112 0 196 79t84 191v40q0 112-79 191t-191 79H410q-21 0-35.5 14.5T360-160v80z" /></svg>;
export default MaterialGastroenterologyFill;