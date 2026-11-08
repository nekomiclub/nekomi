import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPhoneEnabled: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M165-120q-19.29 0-32.14-12.86Q120-145.71 120-165v-135q0-14.91 10-26.96Q140-339 155-343l119-26q12.7-2 25.85 2T323-352l95 98q45-24 86-55.5t78-69.5q35-34 64-72t55-82l-99.77-100.77Q593-642 590.5-653.5t-.43-25.86L617-805q4-15 14-25t24-10h140q19.29 0 32.14 12.86Q840-814.29 840-795q0 116-56 236.5T625-335 401.5-176 165-120m566-468q25-60 37-106.5t12-85.5H673l-23 110zM362-225l-79-83-103 21v107q45-2 93-14t89-31m0 0" /></svg>;
export default MaterialPhoneEnabled;