import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFormatPaintOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M800-840v440q0 24-18 42t-42 18h-34l-60-60h94v-94H552l-60-60h248v-226h-56v171h-60v-171h-71v85h-60v-85H266l-40-40q15-10 32.5-15t36.5-5zm13 779L583-291v151q0 25-18 42.5T523-80h-86q-24 0-42-17.5T377-140v-200H220q-24 0-42-18t-18-42v-314l-99-99 43-43 752 752zM220-400h254l-94-94H220zm0-154h100L220-654zm254 154H220zm172 0h94z" /></svg>;
export default MaterialFormatPaintOff;