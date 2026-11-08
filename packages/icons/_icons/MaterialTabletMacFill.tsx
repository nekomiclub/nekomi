import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTabletMacFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M511.5-123.68q8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5 12.82 0 21.32-8.68M180-40q-24.75 0-42.37-17.63Q120-75.25 120-100v-760q0-24.75 17.63-42.38Q155.25-920 180-920h600q24.75 0 42.38 17.62Q840-884.75 840-860v760q0 24.75-17.62 42.37Q804.75-40 780-40zm0-210h600v-520H180z" /></svg>;
export default MaterialTabletMacFill;