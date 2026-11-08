import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPark: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M538-80H423v-149H120l189-274h-95l266-377 266 377h-94l188 274H538zM236-289h189-90 290-89 189zm0 0h489L536-563h89L480-769 335-563h90z" /></svg>;
export default MaterialPark;