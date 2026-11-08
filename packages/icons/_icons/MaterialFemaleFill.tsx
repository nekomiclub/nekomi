import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFemaleFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-120v-80h-80v-60h80v-102q-82-11-136-73.71-54-62.7-54-145.29 0-91.42 64.5-155.21T480-800t155.5 63.79T700-581q0 82.59-54 145.29Q592-373 510-362v102h80v60h-80v80zm143-346.8q47-46.8 47-113T593.2-693t-113-47T367-693.2t-47 113T366.8-467t113 47T593-466.8" /></svg>;
export default MaterialFemaleFill;