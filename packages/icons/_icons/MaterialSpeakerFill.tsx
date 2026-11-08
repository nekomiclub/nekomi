import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSpeakerFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M700-80H260q-25 0-42.5-17.5T200-140v-680q0-25 17.5-42.5T260-880h440q25 0 42.5 17.5T760-820v680q0 25-17.5 42.5T700-80M535-626q22-22 22-54t-22-54-54-22-54 22-22 54 22 54 54 22 54-22m61.5 382.5Q644-291 644-360t-47.5-116.5T480-524t-116.5 47.5T316-360t47.5 116.5T480-196t116.5-47.5m-190-43Q376-317 376-360t30.5-73.5T480-464t73.5 30.5T584-360t-30.5 73.5T480-256t-73.5-30.5" /></svg>;
export default MaterialSpeakerFill;