import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLocalActivityFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m376-318 104-81 104 81-40-128 98-82H522l-42-122-42 122H318l98 82zM140-160q-25 0-42.5-17.5T80-220v-132q0-10 5.5-17.5T100-380q31-11 48.5-39.5T166-480q0-31-17.5-60T100-580q-9-3-14.5-10.5T80-608v-132q0-25 17.5-42.5T140-800h680q25 0 42.5 17.5T880-740v132q0 10-5.5 17.5T860-580q-31 11-48.5 40T794-480q0 32 17.5 60.5T860-380q9 3 14.5 10.5T880-352v132q0 25-17.5 42.5T820-160z" /></svg>;
export default MaterialLocalActivityFill;