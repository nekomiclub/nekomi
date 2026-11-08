import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEraserSize5Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M400-120q-117 0-198.5-81.5T120-400q0-54 20.5-104.5T202-597l162-162q41-41 92-61t105-20q116 0 197.5 81.5T840-561q0 54-20 105t-61 92L597-202q-42 41-92.5 61.5T400-120" /></svg>;
export default MaterialEraserSize5Fill;