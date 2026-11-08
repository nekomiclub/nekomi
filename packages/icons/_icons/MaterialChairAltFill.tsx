import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialChairAltFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M200-120v-308q0-26 17-43t43-17h60v-90h-60q-26 0-43-17t-17-43v-142q0-26 17-43t43-17h440q26 0 43 17t17 43v142q0 26-17 43t-43 17h-60v90h60q26 0 43 17t17 43v308h-60v-122H260v122zm180-368h200v-90H380z" /></svg>;
export default MaterialChairAltFill;