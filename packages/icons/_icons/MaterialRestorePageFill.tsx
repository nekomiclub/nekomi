import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRestorePageFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M482-251q78 0 132-54t54-132-54-132-132-54q-45 0-82 19t-61 45v-69h-45v152h154v-45h-75q16-23 46.5-37.5T482-573q60 0 98 38t38 98-38 98.5-98 38.5q-48 0-84.5-26T347-393h-51q18 65 68 103.5T482-251M220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h341l239 239v501q0 24-18 42t-42 18z" /></svg>;
export default MaterialRestorePageFill;