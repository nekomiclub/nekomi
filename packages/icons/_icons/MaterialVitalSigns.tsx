import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVitalSigns: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M334-199q-13-9-18-23l-97-228H48v-60h213l102 241 187-467q5-14 18-23t29-9 29 9 18 23l97 226h171v60H699L597-689 410-222q-5 14-18 23t-29 9-29-9" /></svg>;
export default MaterialVitalSigns;