import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWatchVibrationFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M116-271q-27-47-41.5-99.5T60-480q0-58 14.5-110.5T116-690l52 30q-23 40-35.5 85T120-480q0 49 12.5 94t35.5 85zm728 0-52-30q23-40 35.5-85t12.5-94q0-50-12.5-95T792-660l52-30q27 47 41.5 99.5T900-480q0 57-14.5 109.5T844-271M366-80l-47-171q-55-35-87-95t-32-134 32-134.5 87-94.5l47-171h228l47 171q55 34 87 94.5T760-480t-32 134-87 95L594-80zm270-244q64-64 64-156t-64-156-156-64-156 64-64 156 64 156 156 64 156-64" /></svg>;
export default MaterialWatchVibrationFill;