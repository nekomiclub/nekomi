import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFolderInfo: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-220v-520 250-39zm319 60H140q-24 0-42-18.5T80-220v-520q0-23 18-41.5t42-18.5h281l60 60h339q23 0 41.5 18.5T880-680v242q-13-15-28-28t-32-24v-190H456l-60-60H140v520h297.33q3.67 16 8.99 30.92Q451.64-174.17 459-160m364.5-251.5Q880-355 880-274t-56.5 137.5T686-80t-137.5-56.5T492-274t56.5-137.5T686-468t137.5 56.5M666-154h40v-160h-40zm34-206q6-6 6-14t-6-14-14-6-14 6-6 14 6 14 14 6 14-6" /></svg>;
export default MaterialFolderInfo;