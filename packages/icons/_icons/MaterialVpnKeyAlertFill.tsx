import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVpnKeyAlertFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M280-412q29 0 48.5-19.5T348-480t-19.5-48.5T280-548t-48.5 19.5T212-480t19.5 48.5T280-412m578.5 163.32q-8.5-8.67-8.5-21.5 0-12.82 8.68-21.32 8.67-8.5 21.5-8.5 12.82 0 21.32 8.68 8.5 8.67 8.5 21.5 0 12.82-8.68 21.32-8.67 8.5-21.5 8.5-12.82 0-21.32-8.68M850-360v-223h60v223zM280-240q-100 0-170-70T40-480t70-170 170-70q86 0 146.5 49t83.55 118H754v313h-66v-167H510q-23 69-83.5 118T280-240" /></svg>;
export default MaterialVpnKeyAlertFill;