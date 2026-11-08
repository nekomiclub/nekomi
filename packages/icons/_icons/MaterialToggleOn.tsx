import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialToggleOn: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M280-240q-100 0-170-70T40-480t70-170 170-70h400q100 0 170 70t70 170-70 170-170 70zm0-60h400q75 0 127.5-52.5T860-480t-52.5-127.5T680-660H280q-75 0-127.5 52.5T100-480t52.5 127.5T280-300m472.5-108.5Q782-438 782-480t-29.5-71.5T681-581t-71.5 29.5T580-480t29.5 71.5T681-379t71.5-29.5M480-480" /></svg>;
export default MaterialToggleOn;