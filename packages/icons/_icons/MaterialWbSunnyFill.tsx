import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWbSunnyFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-810v-110h60v110zm0 770v-110h60v110zm360-410v-60h110v60zm-770 0v-60h110v60zm702-250-43-43 66-66 43 43zM195-151l-43-43 66-66 43 43zm570 0-66-66 43-43 66 66zM218-700l-66-66 43-43 66 66zm102.5 379.5Q255-386 255-480t65.5-159.5T480-705t159.5 65.5T705-480t-65.5 159.5T480-255t-159.5-65.5" /></svg>;
export default MaterialWbSunnyFill;