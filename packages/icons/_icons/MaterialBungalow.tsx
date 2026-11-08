import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBungalow: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M280-120v-286l-61 97-51-31 312-500 312 500-51 31-61-97v286zm60-60h110v-120h60v120h110v-322L480-726 340-502zm110-230v-60h60v60zM340-180h280z" /></svg>;
export default MaterialBungalow;