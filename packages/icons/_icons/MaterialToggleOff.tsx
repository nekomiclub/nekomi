import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialToggleOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M280-240q-100 0-170-70T40-480t70-170 170-70h400q100 0 170 70t70 170-70 170-170 70zm0-60h400q75 0 127.5-52.5T860-480t-52.5-127.5T680-660H280q-75 0-127.5 52.5T100-480t52.5 127.5T280-300m70.5-108.5Q380-438 380-480t-29.5-71.5T279-581t-71.5 29.5T178-480t29.5 71.5T279-379t71.5-29.5M480-480" /></svg>;
export default MaterialToggleOff;