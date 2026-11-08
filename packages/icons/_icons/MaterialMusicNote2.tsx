import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMusicNote2: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M124.5-163.5Q81-207 81-270t43.5-106.5T231-420q28 0 50.5 8t39.5 22v-370l479-80v490q0 63-43.5 106.5T650-200t-106.5-43.5T500-350t43.5-106.5T650-500q28 0 50.5 8t39.5 22v-184l-359 60v324q0 63-43.5 106.5T231-120t-106.5-43.5" /></svg>;
export default MaterialMusicNote2;