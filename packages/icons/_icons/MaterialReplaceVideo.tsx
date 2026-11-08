import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialReplaceVideo: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M260-140h360v-360H260zM131-620q32-118 129.5-189T480-880q91 0 170.5 42.5T780-719v-131h60v230H610v-60h124q-42-66-109-103t-145-37q-97 0-176 54.5T193-620zm129 480v-360zm0 60q-24.75 0-42.37-17.63Q200-115.25 200-140v-360q0-24.75 17.63-42.38Q235.25-560 260-560h360q24.75 0 42.38 17.62Q680-524.75 680-500v140l120-120v320L680-280v140q0 24.75-17.62 42.37Q644.75-80 620-80z" /></svg>;
export default MaterialReplaceVideo;