import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSmartCardReaderOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m833-91-39-39H80v-120q0-25 17.5-42.5T140-310h474l-80-80H203v-331L26-898l43-43 807 807zM263-930h434q24 0 42 18t18 42v480h-52L554-541q29 0 50-21t21-50-21-50-50-21-50 21-21 50L206-889q6-17 21.5-29t35.5-12m60 471h23q23 0 40-13t29-37l-92-92z" /></svg>;
export default MaterialSmartCardReaderOffFill;