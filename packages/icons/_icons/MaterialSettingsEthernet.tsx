import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSettingsEthernet: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m680-240-42-42 196-198-196-198 42-42 240 240zm-400 0L40-480l240-240 42 42-196 198 196 198zm15.5-215.5Q285-466 285-480t10.5-24.5T320-515t24.5 10.5T355-480t-10.5 24.5T320-445t-24.5-10.5m160 0Q445-466 445-480t10.5-24.5T480-515t24.5 10.5T515-480t-10.5 24.5T480-445t-24.5-10.5m160 0Q605-466 605-480t10.5-24.5T640-515t24.5 10.5T675-480t-10.5 24.5T640-445t-24.5-10.5" /></svg>;
export default MaterialSettingsEthernet;