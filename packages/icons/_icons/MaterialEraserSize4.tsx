import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEraserSize4: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M392.73-160Q296-160 228-228.02t-68-164.63Q160-438 176.5-481t51.5-77l173-174q35-34 77.85-51t88.16-17q96.54 0 164.77 68.22Q800-663.55 800-567.01q0 45.31-17 88.16T732-401L558-228q-34 35-76.94 51.5-42.93 16.5-88.33 16.5" /></svg>;
export default MaterialEraserSize4;