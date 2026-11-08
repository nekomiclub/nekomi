import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDatabaseFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M740.5-569Q840-618 840-680q0-63-99.5-111.5T480-840t-260.5 48.5T120-680q0 62 99.5 111T480-520t260.5-49M592-428.5q62-8.5 117.5-26.5t93-46.5T840-570v100q0 40-37.5 68.5t-93 46.5T592-328.5 480.5-320t-112-8.5-118-27-93-47T120-470v-100q0 39 37.5 67.5t93 47 118 27 112 8.5 111.5-8.5m0 200q62-8.5 117.5-26.5t93-46.5T840-370v100q0 40-37.5 68.5t-93 46.5T592-128.5 480.5-120t-112-8.5-118-27-93-47T120-270v-100q0 39 37.5 67.5t93 47 118 27 112 8.5 111.5-8.5" /></svg>;
export default MaterialDatabaseFill;