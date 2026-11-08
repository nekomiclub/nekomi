import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLayersClear: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m650-415-42-42 134-105-262-204-102 79-43-43 145-112 360 280zm86 86-43-43 97-75 50 37zm94 264L641-255 480-130 120-410l50-37 310 241 118-92-43-43-75 59-360-280 120-94L73-822l43-43 757 757zM493-572" /></svg>;
export default MaterialLayersClear;