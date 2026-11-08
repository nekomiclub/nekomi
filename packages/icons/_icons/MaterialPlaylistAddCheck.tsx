import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPlaylistAddCheck: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-331v-60h306v60zm0-165v-60h473v60zm0-165v-60h473v60zm532 460L516-337l42-43 94 93 185-185 43 43z" /></svg>;
export default MaterialPlaylistAddCheck;