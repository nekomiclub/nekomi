import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMobileDockFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M500-729q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9m220-131v106q15 2 23.5 14.5T752-711v54q0 16-8.5 29T720-613v353q0 25-17.5 42.5T660-200H301q-25 0-42.5-17.5T241-260v-600q0-25 17.5-42.5T301-920h359q25 0 42.5 17.5T720-860M320-50v-60h320v60z" /></svg>;
export default MaterialMobileDockFill;