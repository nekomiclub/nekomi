import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHeapSnapshotLarge: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M580.5-230q20.5 0 35-15t14.5-35.5-14.58-35Q600.83-330 580-330q-20 0-35 14.58-15 14.59-15 35.42 0 20 15 35t35.5 15M378-236l246-246-42-42-246 246zm2.5-194q20.5 0 35-15t14.5-35.5-14.58-35Q400.83-530 380-530q-20 0-35 14.58-15 14.59-15 35.42 0 20 15 35t35.5 15M220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h361l219 219v521q0 24-18 42t-42 18zm331-554v-186H220v680h520v-494zM220-820v186zv680z" /></svg>;
export default MaterialHeapSnapshotLarge;