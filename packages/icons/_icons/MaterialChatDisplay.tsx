import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialChatDisplay: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-460v240-600zm100-69h480v-60H240zm0-130h480v-60H240zM80-80v-740q0-24 18-42t42-18h680q24 0 42 18t18 42v381q-14-8-28.5-13.5T820-460v-360H140v600l74-80h186v60H240zm160-319h180q15-24 39.5-40t54.5-20H240zM520-80q-24 0-42-18t-18-42v-200q0-24 18-42t42-18h300q24 0 42 18t18 42v200q0 24-18 42t-42 18zm0-60h300v-200H520z" /></svg>;
export default MaterialChatDisplay;