import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialChessKingFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M225-552q-20-23-31.5-52T182-666q0-72 51.5-123T357-840q25 0 48.5 7t44.5 21v-107h60v107q21-14 44.5-21t49.5-7q72 0 123 51t51 123q0 33-11.5 62T735-552zM120-80v-165q0-24 18-42t42-18h73l16-127H120v-60h720v60H692l16 127h72q24 0 42 18t18 42v165z" /></svg>;
export default MaterialChessKingFill;