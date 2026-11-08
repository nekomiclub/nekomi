import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBatteryAndroidFrameAlert: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M818.5-318.68q-8.5-8.67-8.5-21.5 0-12.82 8.68-21.32 8.67-8.5 21.5-8.5 12.82 0 21.32 8.68 8.5 8.67 8.5 21.5 0 12.82-8.68 21.32-8.67 8.5-21.5 8.5-12.82 0-21.32-8.68M810-430v-240h60v240zM130-240q-37.5 0-63.75-26.25T40-330v-300q0-37.5 26.25-63.75T130-720h620v60H130q-12.75 0-21.37 8.62Q100-642.75 100-630v300q0 12.75 8.63 21.37Q117.25-300 130-300h625q9 26 32.5 43t52.5 17zm0-90v-300h620v300z" /></svg>;
export default MaterialBatteryAndroidFrameAlert;