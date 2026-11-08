import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialZoomInMapFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m143-100-43-43 147-147H120v-60h230v230h-60v-127zm674 0L670-247v127h-60v-230h230v60H713l147 147zM120-610v-60h127L100-817l43-43 147 147v-127h60v230zm490 0v-230h60v127l148-148 43 43-148 148h127v60z" /></svg>;
export default MaterialZoomInMapFill;