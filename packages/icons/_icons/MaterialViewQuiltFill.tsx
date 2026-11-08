import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialViewQuiltFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M430-495q-24 0-42-18t-18-42v-145q0-24 18-42t42-18h350q24 0 42 18t18 42v145q0 24-18 42t-42 18zm250 295q-24 0-42-18t-18-42v-145q0-24 18-42t42-18h100q24 0 42 18t18 42v145q0 24-18 42t-42 18zm-250 0q-24 0-42-18t-18-42v-145q0-24 18-42t42-18h100q24 0 42 18t18 42v145q0 24-18 42t-42 18zm-250 0q-24 0-42-18t-18-42v-440q0-24 18-42t42-18h100q24 0 42 18t18 42v440q0 24-18 42t-42 18z" /></svg>;
export default MaterialViewQuiltFill;