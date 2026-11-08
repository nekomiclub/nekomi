import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWaterFullFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M211-603q51-32 111.5-49T444-670q30 0 59.5 4t56.5 12q51 14 78 19t58 5h56l21-190H187zm51 523q-23 0-40.5-15T202-133l-82-747h720l-82 747q-2 23-19.5 38T698-80z" /></svg>;
export default MaterialWaterFullFill;