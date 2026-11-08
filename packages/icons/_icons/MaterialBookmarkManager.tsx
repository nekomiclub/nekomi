import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBookmarkManager: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-220v-520zm0 60q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h281l60 60h339q24 0 42 18t18 42v194q-14-8-29-11t-31-3v-180H456l-60-60H140v520h360v60zm420 80v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q9 9 13 20t4 22-4.5 22.5-13.41 20.5L683-80zm300-263-37-37zM620-140h38l121-122-18-19-19-18-122 121zm141-141-19-18 37 37z" /></svg>;
export default MaterialBookmarkManager;