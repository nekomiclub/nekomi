import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMovieEdit: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-220v-368zm0 60q-24 0-42-18t-18-42v-520q0-24 18-42t42-18l74 152h130l-74-152h89l74 152h130l-74-152h89l74 152h130l-74-152h112q24 0 42 18t18 42v200h-60v-48H140v368h360v60zm420 40v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q9 9 13 20t4 22-4.5 22.5T902-340L683-120zm300-263-37-37zM620-180h38l121-122-18-19-19-18-122 121zm141-141-19-18 37 37z" /></svg>;
export default MaterialMovieEdit;