import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMobileDock: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M660-260v-600H301v600zM500-729q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9M301-260v-600zm419-600v106q15 2 23.5 14.58T752-711v54q0 16.23-8.5 29.11Q735-615 720-613v353q0 24.75-17.62 42.37Q684.75-200 660-200H301q-24.75 0-42.37-17.63Q241-235.25 241-260v-600q0-24.75 17.63-42.38Q276.25-920 301-920h359q24.75 0 42.38 17.62Q720-884.75 720-860M320-50v-60h320v60z" /></svg>;
export default MaterialMobileDock;