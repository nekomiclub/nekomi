import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialJoinInner: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M320-200q-117 0-198.5-81.5T40-480t81.5-198.5T320-760q36 0 69.5 8.5T452-727q-13 10-24 21t-22 23q-20-8-41.5-12.5T320-700q-91 0-155.5 64T100-480q0 91 64.5 155.5T320-260q23 0 44.5-4.5T406-277q11 12 22 23t24 21q-29 16-62.5 24.5T320-200m320 0q-36 0-69.5-8.5T508-233q13-10 24-21t22-23q20 8 41.5 12.5T640-260q92 0 156-64.5T860-480q0-92-64-156t-156-64q-23 0-44.5 4.5T554-683q-11-12-22-23t-24-21q29-16 62.5-24.5T640-760q117 0 198.5 81.5T920-480t-81.5 198.5T640-200m-160-50q-57-39-88.5-100T360-480t31.5-130T480-710q57 39 88.5 100T600-480t-31.5 130T480-250" /></svg>;
export default MaterialJoinInner;