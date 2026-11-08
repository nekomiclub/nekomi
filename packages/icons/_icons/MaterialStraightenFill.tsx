import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStraightenFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-240q-24 0-42-18t-18-42v-360q0-23 18-41.5t42-18.5h130v240h60v-240h120v240h60v-240h120v240h60v-240h130q24 0 42 18.5t18 41.5v360q0 24-18 42t-42 18z" /></svg>;
export default MaterialStraightenFill;