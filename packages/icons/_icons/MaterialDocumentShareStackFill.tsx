import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDocumentShareStackFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M260-160q-25 0-42.5-17.5T200-220v-640q0-25 17.5-42.5T260-920h340l240 240v185q-26-12-53-18.5t-56-6.5q-60 0-110.5 25T536-428q-28 35-42 75.5T480-269q0 28 6 55.5t19 53.5zM140-40q-24 0-42-18t-18-42v-575h60v575h406q17 19 38 34t45 26zm670-40q-29 0-49.5-20.5T740-150q0-2 .5-3.5t.5-3.5l-92-54q-8 5-18 8t-21 3q-29 0-49.5-20.5T540-270t20.5-49.5T610-340q11 0 21 3.5t18 8.5l92-55q-3-31 17.5-53.5T810-459q29 0 49.5 20.5T880-389t-20.5 49.5T810-319q-11 0-21-3.5t-18-8.5l-91 55v13l91 55q8-5 18-8.5t21-3.5q29 0 49.5 20.5T880-150t-20.5 49.5T810-80M560-860l220 220zv220h220z" /></svg>;
export default MaterialDocumentShareStackFill;