import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSmartCardReaderOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M697-930q24 0 42 18t18 42v480h-52l-8-8v-472H225l-19-19q6-17 21.5-29t35.05-12zM554-541l-71-71q0-29 21-50t50-21q29.29 0 50.14 20.86Q625-641.29 625-612q0 29-21 50t-50 21m-231 82v-228l110 110q-6.41 54.24-29.31 86.12Q380.8-459 346-459zM140-190h594l-60-60H140zm693 99-39-39H80v-120q0-24.75 17.63-42.38Q115.25-310 140-310h474L263-661v271h-60v-331L26-898l43-43 807 807zM399-526" /></svg>;
export default MaterialSmartCardReaderOff;