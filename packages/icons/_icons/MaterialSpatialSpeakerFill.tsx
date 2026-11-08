import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSpatialSpeakerFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M341-80q-125 0-213-87T40-379h60q0 100 70.5 169.5T341-140zm0-140q-67 0-114-46.5T180-379h60q0 42 29.5 70.5T341-280zm43-139q-24 0-42-18t-18-42v-361q0-24 18-42t42-18h193q24 0 42 18t18 42v361q0 24-18 42t-42 18zm235 139v-60q42 0 71.5-28.5T720-379h60q0 66-47 112.5T619-220m0 140v-60q100 0 170.5-69.5T860-379h60q0 125-88 212T619-80" /></svg>;
export default MaterialSpatialSpeakerFill;