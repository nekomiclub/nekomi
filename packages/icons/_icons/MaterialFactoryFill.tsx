import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFactoryFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-80v-481l280-119v80l200-81v121h320v480zm370-160h60v-160h-60zm-160 0h60v-160h-60zm320 0h60v-160h-60zm265-360H705l35-280h100z" /></svg>;
export default MaterialFactoryFill;