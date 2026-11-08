import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAndroidWifi3Bar: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m114-545-78-79q91-85 205-130t239-45 239 45 205 130l-78 79q-75-69-169.5-106T480-688t-196.5 37T114-545m170 172-71-72q56-49 124.5-75T480-546t142.5 26T747-445l-71 72q-42-35-92-53t-104-18-104 18-92 53m146.5 191.5Q410-202 410-231t20.5-49.5T480-301t49.5 20.5T550-231t-20.5 49.5T480-161t-49.5-20.5" /></svg>;
export default MaterialAndroidWifi3Bar;