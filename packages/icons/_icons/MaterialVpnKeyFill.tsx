import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVpnKeyFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M280-240q-100 0-170-70T40-480t70-170 170-70q86 0 146.5 49T510-553h410v146H814v167H688v-167H510q-23 69-83.5 118T280-240m0-172q29 0 48.5-19.5T348-480t-19.5-48.5T280-548t-48.5 19.5T212-480t19.5 48.5T280-412" /></svg>;
export default MaterialVpnKeyFill;