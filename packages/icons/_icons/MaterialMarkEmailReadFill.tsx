import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMarkEmailReadFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M633-80 472-241l43-43 118 118 244-244 43 43zm-493-92q-25 0-42.5-17.5T80-232v-508q0-25 17.5-42.5T140-800h677q25 0 42.5 17.5T877-740v244L631-250 515-366 388-239l68 67zm338-295 339-217-5-56-334 213-334-213-4 56z" /></svg>;
export default MaterialMarkEmailReadFill;