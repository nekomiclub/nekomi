import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialQueueMusicFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M642.94-160q-47.94 0-81.44-33.56t-33.5-81.5 32.67-81.44Q593.33-390 640-390q15.97 0 30.48 3Q685-384 698-377v-343h182v71H758v375q0 47.5-33.56 80.75T642.94-160M120-320v-60h306v60zm0-170v-60h473v60zm0-170v-60h473v60z" /></svg>;
export default MaterialQueueMusicFill;