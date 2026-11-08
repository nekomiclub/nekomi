import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialArtTrack: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M100-200q-24 0-42-18t-18-42v-440q0-24 18-42t42-18h440q24 0 42 18t18 42v440q0 24-18 42t-42 18zm0-60h440v-440H100zm56-97h325L381-490l-85 110-60-82zm544 157v-560h60v560zm160 0v-560h60v560zm-760-60v-440z" /></svg>;
export default MaterialArtTrack;