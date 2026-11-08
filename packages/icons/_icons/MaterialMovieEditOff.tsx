import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMovieEditOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-160q-24 0-42-18t-18-42v-520q0-25 17.5-42.5T140-800h20l212 212H140v368h360v60zm740-580v152H458L246-800h78l74 152h130l-74-152h130l74 152h130l-74-152h106q24 0 42 18t18 42m-20 357-37-37zm-56 142L681-364l100-99q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q9 9 13 20t4 22-5 22.5-13 20.5zm82 167-43 43-125-124-35 35H560v-123l35-35L31-843l43-43zM620-180h38l17-18-37-37-18 17z" /></svg>;
export default MaterialMovieEditOff;