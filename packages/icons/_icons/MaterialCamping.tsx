import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCamping: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-80v-183l363-491-67-90 49-35 55 75 56-75 48 35-66 90 362 491v183zm400-623L140-243v103h145l195-273 195 273h145v-103zM359-140h242L480-310zm121-273 195 273zL285-140z" /></svg>;
export default MaterialCamping;