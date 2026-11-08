import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDiamondShineFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m173-701-72-70 43-44 71 72zm279-78v-101h60v101zm336 78-42-42 72-72 42 44zM482-80 150-406h664zM320-673h323l171 207H150z" /></svg>;
export default MaterialDiamondShineFill;