import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialResetTvFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M330-120v-80H140q-25 0-42.5-17.5T80-260v-520q0-25 17.5-42.5T140-840h680q25 0 42.5 17.5T880-780v227H487l90-90-42-42-162 162 162 161 42-42-90-89h393v233q0 25-17.5 42.5T820-200H630v80z" /></svg>;
export default MaterialResetTvFill;