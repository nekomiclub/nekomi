import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMusicOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M806-56 57-805l43-43L849-99zM546-487l-60-60v-293h234v135H546zM396-120q-63 0-106.5-43.5T246-270t43.5-106.5T396-420q28 0 50.5 8t39.5 22v-72l60 60v132q0 63-43.5 106.5T396-120" /></svg>;
export default MaterialMusicOffFill;