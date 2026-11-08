import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHumidityIndoorFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M481-300q66 0 112.5-46T640-458q0-32-12-60.5T593-569L480-680 367-569q-23 22-35 50.5T320-458q0 66 47.5 112T481-300M380-460q0-19 7.57-35.51Q395.13-512.03 409-526l71-70 71.25 70.21Q565-512 572.5-495.51T580-460zM160-160v-480l320-240 320 240v480z" /></svg>;
export default MaterialHumidityIndoorFill;