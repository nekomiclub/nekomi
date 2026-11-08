import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFolderDelete: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M550-280h120q20.83 0 35.42-14.58Q720-309.17 720-330v-205h40v-50H650v-35h-80v35H460v50h40v205q0 20.83 14.58 35.42Q529.17-280 550-280m0-255h120v205H550zM140-160q-24 0-42-18.5T80-220v-520q0-23 18-41.5t42-18.5h281l60 60h339q23 0 41.5 18.5T880-680v460q0 23-18.5 41.5T820-160zm0-60h680v-460H456l-60-60H140zm0 0v-520z" /></svg>;
export default MaterialFolderDelete;