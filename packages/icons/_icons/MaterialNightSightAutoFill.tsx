import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNightSightAutoFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M440-130q-129 0-219.5-90.5T130-440t90.5-219.5T440-750q-26 32-38 70.5T390-600q0 104 73 177t177 73q26 0 52-5.5t50-16.5q-24 106-108.5 174T440-130m118-394 126-356h78l126 356h-72l-28-80H658l-28 80zm116-130h98l-49-155z" /></svg>;
export default MaterialNightSightAutoFill;