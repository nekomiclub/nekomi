import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWifiHomeFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-160v-401l-84 64-36-48 440-335 440 336-36 47-84-64v73q-19-6-39-9t-41-3q-108.64 0-184.32 75.68T460-240q0 20.33 3 40.67 3 20.33 9 39.33zM700-40H540v-60h57q-26-27-41.5-63T540-240q0-72 45.5-127T700-436v62q-44 13-72 49.5T600-240q0 29 10.5 54t29.5 44v-58h60zm60-4v-62q45-14 72.5-50.5T860-240q0-29-10.5-54T820-338v58h-60v-160h160v60h-57q26 27 41.5 63t15.5 77q0 72-45.5 127T760-44" /></svg>;
export default MaterialWifiHomeFill;