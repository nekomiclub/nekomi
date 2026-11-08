import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTvGenFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M170-120v-80h-30q-25 0-42.5-17.5T80-260v-480q0-25 17.5-42.5T140-800h680q25 0 42.5 17.5T880-740v480q0 25-17.5 42.5T820-200h-30v80h-23l-26-80H220l-27 80z" /></svg>;
export default MaterialTvGenFill;