import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNightSightAutoOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M392-567 263-694q39-27 84-41.5t93-14.5q-26 32-38 70.5T390-600q0 8 .5 16.5T392-567m305 300-86-85q34 4 67-1t64-19q-6 28-17.5 54.5T697-267M558-524l126-356h78l126 356h-72l-28-80H658l-28 80zm116-130h98l-49-155zM791-80l-43 43-141-142q-38 24-80 36.5T440-130q-129 0-219.5-90.5T130-440q0-45 12.5-87t36.5-80L29-757l43-43z" /></svg>;
export default MaterialNightSightAutoOffFill;