import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVotingChipFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M320-200q-117 0-198.5-81.5T40-480t81.5-198.5T320-760h320q117 0 198.5 81.5T920-480t-81.5 198.5T640-200zm20-170h40v-90h90v-40h-90v-90h-40v90h-90v40h90zm290 0h40v-220H570v40h60z" /></svg>;
export default MaterialVotingChipFill;