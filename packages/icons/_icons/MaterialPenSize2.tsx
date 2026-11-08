import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPenSize2: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M203-233q0-12 9-21l494-494q8-8 20.5-8.5T748-748t9 21-9 21L254-212q-9 9-21 9t-21-9-9-21" /></svg>;
export default MaterialPenSize2;