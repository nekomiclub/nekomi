import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialUniversalLocal: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-220h680v-520H140zm0 60q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-60v-520zm309-273q-13-13-13-31t13-31 31-13 31 13 13 31-13 31-31 13-31-13m31 233q89-75 132.5-139.79Q656-464.57 656-519.94q0-83.06-53.28-131.56-53.29-48.5-122.5-48.5-69.22 0-122.72 48.5T304-519.94q0 55.37 43.5 120.15Q391-335 480-260" /></svg>;
export default MaterialUniversalLocal;