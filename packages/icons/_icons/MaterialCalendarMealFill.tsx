import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCalendarMealFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-120q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18zm185-160h50v-160q28-7 46.5-28t18.5-49v-163h-40v151h-30v-151h-40v151h-30v-151h-40v163q0 28 18.5 49t46.5 28zm245 0h50v-400q-50 0-80 30t-30 80v130h60z" /></svg>;
export default MaterialCalendarMealFill;