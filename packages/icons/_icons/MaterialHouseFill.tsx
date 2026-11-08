import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHouseFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M201-160v-392L76-457l-36-47 440-336 178 136v-96h100v172l162 124-37 47-125-96v393H570v-240H390v240zm194-410h170q0-33-25.5-54.5T480-646t-59.5 21.5T395-570" /></svg>;
export default MaterialHouseFill;