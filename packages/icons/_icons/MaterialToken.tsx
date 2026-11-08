import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialToken: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-80 120-286v-399l360-195 360 195v399zM366-578q23-23 52.5-37.5T480-630t61.5 14.5T594-578l153-90-267-142-267 142zm84 412v-167q-52-14-86-54t-34-93q0-11 1.5-22.5T337-525l-157-93v297zm94-250q26-26 26-64t-26-64-64-26-64 26-26 64 26 64 64 26 64-26m-34 250 270-155v-297l-157 93q4 11 5.5 22.5T630-480q0 53-34 93t-86 54z" /></svg>;
export default MaterialToken;