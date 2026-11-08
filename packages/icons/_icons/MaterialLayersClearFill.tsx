import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLayersClearFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M650-415 335-730l145-112 360 280zm86 86-43-43 97-75 50 37zm94 264L641-255 480-130 120-410l50-37 310 241 118-92-43-43-75 59-360-280 120-94L73-822l43-43 757 757z" /></svg>;
export default MaterialLayersClearFill;