import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialShareWindows: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M300-370v-240q0-25 17.63-42.5Q335.25-670 360-670h350L597-783l43-42 185 185-185 186-43-42 113-114H360v240zM180-120q-24.75 0-42.37-17.63Q120-155.25 120-180v-640h60v640h520v-190h60v190q0 24.75-17.62 42.37Q724.75-120 700-120z" /></svg>;
export default MaterialShareWindows;