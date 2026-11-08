import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBatteryAndroidBoltFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M130-240q-38 0-64-26t-26-64v-300q0-38 26-64t64-26h617L475-380h189l-25 140zm577-40 28-160H600l192-240h21l-28 160h135L728-280z" /></svg>;
export default MaterialBatteryAndroidBoltFill;