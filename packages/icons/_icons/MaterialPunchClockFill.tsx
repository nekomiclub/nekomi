import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPunchClockFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-80v-640h130v-200h460v200h130v640zm190-640h340v-140H310zm170 500q75 0 127.5-52.5T660-400t-52.5-127.5T480-580t-127.5 52.5T300-400t52.5 127.5T480-220m46-106 28-28-54-54v-92h-40v108z" /></svg>;
export default MaterialPunchClockFill;