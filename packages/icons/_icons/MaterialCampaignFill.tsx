import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCampaignFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M730-450v-60h150v60zm50 290-121-90 36-48 121 90zm-82-503-36-48 118-89 36 48zM210-200v-160h-70q-25 0-42.5-17.5T80-420v-120q0-25 17.5-42.5T140-600h180l200-120v480L320-360h-50v160zm350-146v-268q27 24 43.5 58.5T620-480t-16.5 75.5T560-346" /></svg>;
export default MaterialCampaignFill;