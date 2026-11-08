import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSanitizer: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M680-650q-20 0-35-15t-15-35.24q0-13.76 13.5-37.26T680-785q23 24 36.5 47.4Q730-714.21 730-700q0 20-14.58 35-14.59 15-35.42 15m110 280q-37 0-63.5-26.5T700-460.09q0-30.91 27.5-77.41T790-625q34 41 62 87.28 28 46.27 28 77.72 0 37-26.1 63.5T790-370M360-250h60v-80h80v-60h-80v-80h-60v80h-80v60h80zM220-80q-24 0-42-18t-18-42v-350q0-86 57-150.19T360-718v-102h-90v-60h240q29.3 0 55.15 8T614-849l-44 45q-14-8-28.5-12t-31.5-4h-90v102q86 13.62 143 77.81T620-490v350q0 24-18 42t-42 18zm0-60h340v-350q0-71-49.5-120.5t-120-49.5T270-610.5 220-490zm0 0h340z" /></svg>;
export default MaterialSanitizer;