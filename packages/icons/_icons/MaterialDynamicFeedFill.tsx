import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDynamicFeedFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-120q-24 0-42-18t-18-42v-371h60v371h452v60zm121-120q-24 0-42.5-18T200-300v-371h60v371h453v60zm119-120q-24 0-42-18t-18-42v-360q0-24 18-42t42-18h440q24 0 42 18t18 42v360q0 24-18 42t-42 18zm0-60h440v-298H380z" /></svg>;
export default MaterialDynamicFeedFill;