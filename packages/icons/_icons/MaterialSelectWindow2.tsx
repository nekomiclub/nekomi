import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSelectWindow2: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M656-140v-392H140v392zm60-228v-60h104v-392H304v228h-60v-228q0-24 18-42t42-18h516q24 0 42 18t18 42v392q0 24-18 42t-42 18zM140-80q-24 0-42-18t-18-42v-392q0-24 18-42t42-18h504q29.7 0 50.85 20.86Q716-550.29 716-521v381q0 24-18 42t-42 18zm258-256" /></svg>;
export default MaterialSelectWindow2;