import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialKebabDining: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M260-40v-170h-50q-37 0-63.5-26.5t-26.5-64 26.5-63.5 63.5-26h50v-60H120v-180h140v-60h-50q-37 0-63.5-26.5t-26.5-64 26.5-63.5 63.5-26h50v-50h40v50h50q37.8 0 63.9 26.1T440-780q0 37-26.1 63.5T350-690h-50v60h140v180H300v60h50q37.8 0 63.9 26.1T440-300q0 37-26.1 63.5T350-210h-50v170zm400 0v-170h-50q-37 0-63.5-26.5t-26.5-64 26.5-63.5 63.5-26h50v-60H520v-180h140v-60h-50q-37 0-63.5-26.5t-26.5-64 26.5-63.5 63.5-26h50v-50h40v50h50q37.8 0 63.9 26.1T840-780q0 37-26.1 63.5T750-690h-50v60h140v180H700v60h50q37.8 0 63.9 26.1T840-300q0 37-26.1 63.5T750-210h-50v170zM210-750h140q13 0 21.5-9t8.5-21q0-13-8.5-21.5T350-810H210q-12 0-21 8.5t-9 21 9 21.5 21 9m400 0h140q13 0 21.5-9t8.5-21q0-13-8.5-21.5T750-810H610q-12 0-21 8.5t-9 21 9 21.5 21 9M180-510h200v-60H180zm400 0h200v-60H580zM210-270h140q13 0 21.5-9t8.5-21q0-13-8.5-21.5T350-330H210q-12 0-21 8.5t-9 21 9 21.5 21 9m400 0h140q13 0 21.5-9t8.5-21q0-13-8.5-21.5T750-330H610q-12 0-21 8.5t-9 21 9 21.5 21 9M180-750v-60zm400 0v-60zM180-510v-60zm400 0v-60zM180-270v-60zm400 0v-60z" /></svg>;
export default MaterialKebabDining;