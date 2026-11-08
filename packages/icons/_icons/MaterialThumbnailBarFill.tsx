import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialThumbnailBarFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-160q-25 0-42.5-17.5T80-220v-520q0-25 17.5-42.5T140-800h200v640zm260 0v-640h420q25 0 42.5 17.5T880-740v520q0 25-17.5 42.5T820-160z" /></svg>;
export default MaterialThumbnailBarFill;