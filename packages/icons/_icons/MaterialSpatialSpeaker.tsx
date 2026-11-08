import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSpatialSpeaker: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M341-80q-125 0-213-86.9Q40-253.79 40-379h60q0 100 70.29 169.5T341-140zm0-140q-67 0-114-46.38-47-46.37-47-112.62h60q0 42 29.29 70.5T341-280zm43-139q-24 0-42-18t-18-42v-361q0-24 18-42t42-18h193q24 0 42 18t18 42v361q0 24-18 42t-42 18zm0-60h193v-361H384zm235 199v-60q42 0 71.5-28.71T720-379h60q0 66-46.96 112.5T619-220m0 140v-60q100 0 170.5-69.71T860-379h60q0 125-88 212T619-80M384-419h193z" /></svg>;
export default MaterialSpatialSpeaker;