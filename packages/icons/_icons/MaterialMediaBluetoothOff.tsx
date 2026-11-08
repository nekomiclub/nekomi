import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMediaBluetoothOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M819-59 620-257l-59 61-31-31 59-61-169-169v187q0 63-43.5 106.5T270-120t-106.5-43.5T120-270t43.5-106.5T270-420q26 0 50 8t40 22v-127L69-807l43-43 749 749zm-5-173L535-512l26-26 119 119v-196h21l140 140-108 108 108 108zm-94-178 65-65-65-65zM420-626l-60-60v-154h234v135H420z" /></svg>;
export default MaterialMediaBluetoothOff;