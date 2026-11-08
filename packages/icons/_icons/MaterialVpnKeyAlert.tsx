import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVpnKeyAlert: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M628-240v-137H491q-26 62-79.5 99.5T280-240q-100 0-170-70T40-480t70-170 170-70q78 0 131.5 37.5T491-583h263v60H450q-8-43-53.5-90T280-660q-75 0-127.5 52.5T100-480t52.5 127.5T280-300q71 0 116.5-47t53.5-90h242v137h62v60zM280-412q29 0 48.5-19.5T348-480t-19.5-48.5T280-548t-48.5 19.5T212-480t19.5 48.5T280-412m578.5 163.5Q850-257 850-270t8.5-21.5T880-300t21.5 8.5T910-270t-8.5 21.5T880-240t-21.5-8.5M850-360v-223h60v223z" /></svg>;
export default MaterialVpnKeyAlert;