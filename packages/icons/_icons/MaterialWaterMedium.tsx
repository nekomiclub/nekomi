import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWaterMedium: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m235-388 27.24 248H698l30-270h-31q-37.25 0-68.12-5.5Q598-421 544-436q-25-7-49.5-10.5T444-450q-56 0-109.5 16T235-388m-8-65q48-27 104.5-42T444-510q30 0 59.5 4t56.5 12q51.13 14 78.23 19 27.09 5 57.77 5h38l39-350H187zm35 373q-23 0-40.34-14.93Q204.31-109.86 202-133l-82-747h720l-82 747q-2.31 23.14-19.66 38.07Q721-80 698-80zm0-60h436z" /></svg>;
export default MaterialWaterMedium;