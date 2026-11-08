import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTabSearchFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-160q-25 0-42.5-17.5T80-220v-520q0-25 17.5-42.5T140-800h680q25 0 42.5 17.5T880-740v317q-28-63-84.5-100T670-560h150v-180H524v180h146q-96 0-163 67t-67 163q0 49 20 93t56 77zm738 80L768-190q-21 17-46.5 23.5T670-160q-71 0-120.5-49.5T500-330t49.5-120.5T670-500t120.5 49.5T840-330q0 26-6.5 52T810-232l110 110zM748-252q32-32 32-78t-32-78-78-32-78 32-32 78 32 78 78 32 78-32" /></svg>;
export default MaterialTabSearchFill;