import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGeneralDevice: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M320-210v-570q0-24.75 17.63-42.38Q355.25-840 380-840h200q24.75 0 42.38 17.62Q640-804.75 640-780v570zm60-60h200v-510H380zm-60 150v-60h320v60zm60-150h200z" /></svg>;
export default MaterialGeneralDevice;