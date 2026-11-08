import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWbShadeFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M792-160 540-412v-87l339 339zm-252 0v-177l177 177zm-400 0v-410H80l230-230 230 230h-60v410zm130-255h80v-155h-80z" /></svg>;
export default MaterialWbShadeFill;