import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFortFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M40-120v-156l80-80v-258l-80-80v-146h60v80h100v-80h60v80h100v-80h60v146l-80 80v74h280v-74l-80-80v-146h60v80h100v-80h60v80h100v-80h60v146l-80 80v258l80 80v156H570v-120q0-38-26-64t-64-26-64 26-26 64v120z" /></svg>;
export default MaterialFortFill;