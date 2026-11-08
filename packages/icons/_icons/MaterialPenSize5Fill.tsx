import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPenSize5Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M210-320.12Q210-366 242-398l320-320q32.15-32 78.07-32Q686-750 718-717.88t32 78T718-562L398-242q-32.15 32-78.07 32Q274-210 242-242.12t-32-78" /></svg>;
export default MaterialPenSize5Fill;