import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFlaky: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-80q-85 0-158-30.5T195-195t-84.5-127T80-480q0-84 30.5-157T195-764t127-85 158-31q84 0 157 31t127 85 85 127 31 157q0 85-31 158t-85 127-127 84.5T480-80M294-518l56-57 56 57 36-36-57-56 57-56-36-36-56 57-56-57-36 36 57 56-57 56zm186 378q145 0 242.5-97.5T820-480q0-72-26-134t-72-108L238-238q46 46 108 72t134 26m82-123-89-89 35-36 54 54 100-99 35 35z" /></svg>;
export default MaterialFlaky;