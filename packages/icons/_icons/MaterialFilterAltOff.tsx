import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFilterAltOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m580-465-43-43 183-232H305l-60-60h527q21 0 31 19t-4 36zM813-61 560-314v114q0 17-11.5 28.5T520-160h-80q-17 0-28.5-11.5T400-200v-274L61-813l43-43 752 752zM537-508" /></svg>;
export default MaterialFilterAltOff;