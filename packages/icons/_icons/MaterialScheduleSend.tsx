import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialScheduleSend: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-160v-640l664 280h-59q-24 0-45.5 1t-37.5 4L180-710v168l242 62-242 60v167l282-118q-8 17-13.5 39.5T441-295zm436 24.5Q500-191 500-269q0-79 56-135t134-56 134 56 56 135q0 78-56 133.5T690-80t-134-55.5M760-166l29-31-82-82v-120h-41v139zM180-371v-339 457z" /></svg>;
export default MaterialScheduleSend;