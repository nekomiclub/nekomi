import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPerson: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M372-523q-42-42-42-108t42-108 108-42 108 42 42 108-42 108-108 42-108-42M160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420t123 15.5T731-360q31 14 50 41t19 65v94zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360t-111 11.5T252-306q-14 7-23 21.5t-9 30.5zm324.5-346.5Q570-592 570-631t-25.5-64.5T480-721t-64.5 25.5T390-631t25.5 64.5T480-541t64.5-25.5M480-220" /></svg>;
export default MaterialPerson;