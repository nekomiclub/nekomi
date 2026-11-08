import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRecentPatient: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q28 0 55 3t55 9v59q-28-6-55-8.5t-55-2.5q-57 0-110.5 12T252-306q-14 7-23 21.5t-9 30.5v34h370v60zm60-60h370zm152-303q-42-42-42-108t42-108 108-42 108 42 42 108-42 108-108 42-108-42m172.5-43.5Q570-592 570-631t-25.5-64.5T480-721t-64.5 25.5T390-631t25.5 64.5T480-541t64.5-25.5M730-38v-172h-80v-220h214l-80 160h79z" /></svg>;
export default MaterialRecentPatient;