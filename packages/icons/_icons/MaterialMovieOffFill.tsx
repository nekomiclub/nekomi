import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMovieOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-160q-24 0-42-18t-18-42v-520q0-25 17.5-42.5T140-800h20l640 640zm725-21L246-800h78l74 152h130l-74-152h130l74 152h130l-74-152h106q24 0 42 18t18 42v520q0 11-4 21t-11 18M813-61 61-813l43-43 752 752z" /></svg>;
export default MaterialMovieOffFill;