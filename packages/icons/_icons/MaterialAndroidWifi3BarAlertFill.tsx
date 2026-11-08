import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAndroidWifi3BarAlertFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M778.5-168.5Q770-177 770-190t8.5-21.5T800-220t21.5 8.5T830-190t-8.5 21.5T800-160t-21.5-8.5M770-280v-140h60v140zM114-545l-78-79q91-85 205-130t239-45 239 45 205 130l-78 79q-75-69-169.5-106T480-688t-196.5 37T114-545m316.5 363.5Q410-202 410-231t20.5-49.5T480-301t49.5 20.5T550-231t-20.5 49.5T480-161t-49.5-20.5M284-373l-71-72q56-49 124.5-75T480-546q70 0 136 23.5T736-454q-26 8-49.5 23T645-396q-37-23-78.5-35.5T480-444q-54 0-104 18t-92 53" /></svg>;
export default MaterialAndroidWifi3BarAlertFill;