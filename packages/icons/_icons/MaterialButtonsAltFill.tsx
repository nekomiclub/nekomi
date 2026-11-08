import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialButtonsAltFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-240q-24 0-42-18t-18-42v-360q0-24 18-42t42-18h680q24 0 42 18t18 42v360q0 24-18 42t-42 18zm147-120h49v-95h95v-50h-95v-95h-49v95h-95v50h95z" /></svg>;
export default MaterialButtonsAltFill;