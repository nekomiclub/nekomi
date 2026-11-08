import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSwitches: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M270-289q-80 0-135-54.5T80-479t54.5-135.5T270-669q51 0 90 22t65 63h350q44 0 74.5 30.5T880-479t-30.5 74.5T775-374H425q-26 41-65 63t-90 22m183-145h322q20 0 32.5-12.5T820-479t-12.5-32.5T775-524H453q4 10 5.5 22t1.5 23-1.5 23-5.5 22m-90.5 47.5Q400-424 400-479t-37.5-92.5T270-609t-92.5 37.5T140-479t37.5 92.5T270-349t92.5-37.5" /></svg>;
export default MaterialSwitches;