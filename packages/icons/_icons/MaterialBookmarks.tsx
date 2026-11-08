import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBookmarks: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-80v-581q0-24.75 17.63-42.38Q195.25-721 220-721h360q24.75 0 42.38 17.62Q640-685.75 640-661v581L400-199zm60-97 180-89 180 89v-484H220zm520-62v-582H284v-60h456q24.75 0 42.38 17.62Q800-845.75 800-821v582zM220-661h360z" /></svg>;
export default MaterialBookmarks;