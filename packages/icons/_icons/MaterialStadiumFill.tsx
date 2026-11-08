import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStadiumFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M158-699v-144l144 72zm540 0v-144l144 72zm-252-36v-144l144 72zM370-84q-54-4-106-14t-93-25-66-34.5T80-200v-360q0-25 31.5-46.5t85.5-38 127-26 156-9.5 156 9.5 127 26 85.5 38T880-560v360q0 23-25 42.5T789-123t-93 25-106 14v-196H370zm110-416q97 0 172.5-14.5T800-558q-23-24-107.5-43T480-620t-212.5 19T160-558q72 29 147.5 43.5T480-500" /></svg>;
export default MaterialStadiumFill;