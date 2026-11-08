import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWaterFull: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M444-610q-60 0-119 19.5T218-536l44 396h436l47-430h-48q-37 0-68-5.3-31-5.29-85-20.7-25-7-49.5-10.5T444-610m-233 7q51-32 111.5-49T444-670q30 0 59.5 4t56.5 12q51.13 14 78.23 19 27.09 5 57.77 5h56l21-190H187zm51 523q-23 0-40.34-14.93Q204.31-109.86 202-133l-82-747h720l-82 747q-2.31 23.14-19.66 38.07Q721-80 698-80zm182-60h254-436z" /></svg>;
export default MaterialWaterFull;