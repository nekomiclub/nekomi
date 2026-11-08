import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFolderInfoFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-160q-24 0-42-18.5T80-220v-520q0-23 18-41.5t42-18.5h281l60 60h339q23 0 41.5 18.5T880-680v242q-36-43-86.5-67T686-529q-106 0-180 74.5T432-274q0 30 6.5 59t20.5 55zm408.5 23.5Q492-193 492-274t56.5-137.5T686-468t137.5 56.5T880-274t-56.5 137.5T686-80t-137.5-56.5M666-154h40v-160h-40zm34-206q6-6 6-14t-6-14-14-6-14 6-6 14 6 14 14 6 14-6" /></svg>;
export default MaterialFolderInfoFill;