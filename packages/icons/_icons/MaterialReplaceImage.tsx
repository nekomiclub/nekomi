import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialReplaceImage: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M347-190h266l-86-113-66 78-44-59zM300-80q-24.75 0-42.37-17.63Q240-115.25 240-140v-360q0-24.75 17.63-42.38Q275.25-560 300-560h360q24.75 0 42.38 17.62Q720-524.75 720-500v360q0 24.75-17.62 42.37Q684.75-80 660-80zm0-60h360v-360H300zM131-620q32-118 129.5-189T480-880q91 0 170.5 42.5T780-719v-131h60v230H610v-60h124q-42-66-109-103t-145-37q-97 0-176 54.5T193-620zm169 480v-360z" /></svg>;
export default MaterialReplaceImage;