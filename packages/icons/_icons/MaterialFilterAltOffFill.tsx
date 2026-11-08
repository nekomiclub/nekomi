import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFilterAltOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M580-465 245-800h527q21 0 31 19t-4 36zM813-61 560-314v114q0 17-11.5 28.5T520-160h-80q-17 0-28.5-11.5T400-200v-274L61-813l43-43 752 752z" /></svg>;
export default MaterialFilterAltOffFill;