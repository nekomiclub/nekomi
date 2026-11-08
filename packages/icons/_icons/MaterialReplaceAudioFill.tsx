import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialReplaceAudioFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M131-620q32-118 129.5-189T480-880q91 0 170.5 42.5T780-719v-131h60v230H610v-60h124q-42-66-109-103t-145-37q-97 0-176 54.5T193-620zm197 502q-38-38-38-92t38-92 92-38q20 0 37.5 5t32.5 15v-220h180v60H550v270q0 54-38 92t-92 38-92-38" /></svg>;
export default MaterialReplaceAudioFill;