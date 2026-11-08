import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCalendarMeal: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-120q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18zm600-60v-620H180v620zM365-280h50v-160q28.17-6.86 46.58-27.93Q480-489 480-516.69V-680h-40v151h-30v-151h-40v151h-30v-151h-40v163q0 28 18.42 49.07Q336.83-446.86 365-440zm245 0h50v-400q-50 0-80 30t-30 80v130h60zM180-180v-620z" /></svg>;
export default MaterialCalendarMeal;