import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSpeaker3: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M273-180h414q22 0 37.5-15.5T740-232v-536q0-21-15.5-36.5T687-820H273q-22 0-37.5 15.5T220-768v536q0 21 15.5 36.5T273-180m52 100v-40h-52q-48 0-80.5-32.5T160-232v-536q0-47 32.5-79.5T273-880h414q47 0 80 32.5t33 79.5v536q0 47-33 79.5T687-120h-53v40zm155-420" /></svg>;
export default MaterialSpeaker3;