import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFolderOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M870-189 259-800h162l60 60h339q23 0 41.5 18.5T880-680v460q0 8-2.5 16t-7.5 15m-8 161L730-160H140q-24 0-42-18.5T80-220v-520q0-23 18-41.5t42-18.5h34l60 60h-84l-94-94 42-42L904-70z" /></svg>;
export default MaterialFolderOffFill;