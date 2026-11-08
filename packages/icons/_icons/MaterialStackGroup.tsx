import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStackGroup: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M380-80q-24.75 0-42.37-17.63Q320-115.25 320-140v-180H140q-24.75 0-42.37-17.63Q80-355.25 80-380v-440q0-24.75 17.63-42.38Q115.25-880 140-880h440q24.75 0 42.38 17.62Q640-844.75 640-820v180h180q24.75 0 42.38 17.62Q880-604.75 880-580v440q0 24.75-17.62 42.37Q844.75-80 820-80zm0-60h440v-440H580v-240H140v440h240zm100-340" /></svg>;
export default MaterialStackGroup;