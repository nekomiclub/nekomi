import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialKebabDiningFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M260-40v-170h-50q-37 0-63.5-26.5t-26.5-64 26.5-63.5 63.5-26h50v-60H120v-180h140v-60h-50q-37 0-63.5-26.5t-26.5-64 26.5-63.5 63.5-26h50v-50h40v50h50q37.8 0 63.9 26.1T440-780q0 37-26.1 63.5T350-690h-50v60h140v180H300v60h50q37.8 0 63.9 26.1T440-300q0 37-26.1 63.5T350-210h-50v170zm400 0v-170h-50q-37 0-63.5-26.5t-26.5-64 26.5-63.5 63.5-26h50v-60H520v-180h140v-60h-50q-37 0-63.5-26.5t-26.5-64 26.5-63.5 63.5-26h50v-50h40v50h50q37.8 0 63.9 26.1T840-780q0 37-26.1 63.5T750-690h-50v60h140v180H700v60h50q37.8 0 63.9 26.1T840-300q0 37-26.1 63.5T750-210h-50v170z" /></svg>;
export default MaterialKebabDiningFill;