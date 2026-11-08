import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialInkMarker: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m241-97-40-40-42 42q-14 14-33.5 14.5T92-94t-12.5-34T94-161l42-42-40-40 587-587q11-11 27.5-11t27.5 11l91 91q11 11 11 27.5T829-684zm194-400L181-243l60 60 254-254z" /></svg>;
export default MaterialInkMarker;