import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBookmarkManagerFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M560-80v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q9 9 13 20t4 22-4.5 22.5T902-300L683-80zm263-224 37-39-37-37-38 38zM140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h281l60 60h339q24 0 42 18t18 42v194q-14-8-29-11t-31-3q-22 1-43 9.5T739-465L500-228v68z" /></svg>;
export default MaterialBookmarkManagerFill;