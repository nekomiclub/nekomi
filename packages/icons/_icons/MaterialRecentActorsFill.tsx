import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRecentActorsFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M100-200q-24 0-42-18t-18-42v-440q0-24 18-42t42-18h440q24 0 42 18t18 42v440q0 24-18 42t-42 18zm0-112q49-32 105.5-48T320-376t114.5 16T540-312v-388H100zm141.5-149.5Q209-494 209-540t32.5-78.5T320-651t78.5 32.5T431-540t-32.5 78.5T320-429t-78.5-32.5M700-200v-560h60v560zm160 0v-560h60v560z" /></svg>;
export default MaterialRecentActorsFill;