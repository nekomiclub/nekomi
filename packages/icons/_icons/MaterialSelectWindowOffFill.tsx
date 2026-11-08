import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSelectWindowOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M833-41 407-467H140v327h506v-174l60 60v114q0 24.75-17.62 42.37Q670.75-80 646-80H140q-24.75 0-42.37-17.63Q80-115.25 80-140v-387q0-24.75 17.63-42.38Q115.25-587 140-587h115v-32L26-848l43-43L876-84zM706-340l-60-60v-67h-67L459-587h173q32 0 53 21t21 53v80h114v-327H315v29l-60-60v-29q0-25 17.5-42.5T315-880h505q24.75 0 42.38 17.62Q880-844.75 880-820v387q0 24.75-17.62 42.37Q844.75-373 820-373H706z" /></svg>;
export default MaterialSelectWindowOffFill;