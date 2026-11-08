import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWaterMediumFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M227-453q48-27 104.5-42T444-510q30 0 59.5 4t56.5 12q51 14 78 19t58 5h38l39-350H187zm35 373q-23 0-40.5-15T202-133l-82-747h720l-82 747q-2 23-19.5 38T698-80z" /></svg>;
export default MaterialWaterMediumFill;