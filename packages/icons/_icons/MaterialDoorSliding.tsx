import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDoorSliding: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M344.5-459.5Q334-470 334-484t10.5-24.5T369-519t24.5 10.5T404-484t-10.5 24.5T369-449t-24.5-10.5m223 0Q557-470 557-484t10.5-24.5T592-519t24.5 10.5T627-484t-10.5 24.5T592-449t-24.5-10.5M120-120v-60h46v-600q0-24 18-42t42-18h508q24 0 42 18t18 42v600h46v60zm106-60h224v-600H226zm284 0h224v-600H510zm-30-332" /></svg>;
export default MaterialDoorSliding;