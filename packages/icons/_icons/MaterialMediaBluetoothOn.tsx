import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMediaBluetoothOn: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M163.5-163.5Q120-207 120-270t43.5-106.5T270-420q26 0 49.5 7.5T360-390v-450h234v135H420v435q0 63-43.5 106.5T270-120t-106.5-43.5M681-120v-196L561-196l-31-31 140-140-140-140 31-31 119 119v-196h21l140 140-108 108 108 108-139 139zm40-74 65-65-65-65zm-1-216 65-65-65-65z" /></svg>;
export default MaterialMediaBluetoothOn;