import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPictureInPictureAltFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M446-265h335v-257H446zM140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q25 0 42.5 18t17.5 42v520q0 24-17.5 42T820-160z" /></svg>;
export default MaterialPictureInPictureAltFill;