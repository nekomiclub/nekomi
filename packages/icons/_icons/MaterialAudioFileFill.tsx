import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAudioFileFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M427-192q41 0 70-28.5t29-69.5v-202h116v-60H486v187q-11-9-26.5-14t-32.5-5q-39 0-66 27.5T334-290q0 40 27 69t66 29M220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h361l219 219v521q0 24-18 42t-42 18zm331-554h189L551-820z" /></svg>;
export default MaterialAudioFileFill;