import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSwitchAccessShortcut: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M598-80q-123-51-196.5-160T328-482q0-99 42-187.5T489-820H322v-60h276v276h-60v-179q-71 54-110.5 132.5T388-483q0 108 56.5 198.5T598-146z" /></svg>;
export default MaterialSwitchAccessShortcut;