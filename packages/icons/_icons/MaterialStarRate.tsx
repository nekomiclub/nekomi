import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStarRate: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m343-283 137-104 137 104-55-173 126-82H537l-57-173-57 173H272l126 82zM233-120l93-304L80-600h304l96-320 96 320h304L634-424l93 304-247-188zm247-377" /></svg>;
export default MaterialStarRate;