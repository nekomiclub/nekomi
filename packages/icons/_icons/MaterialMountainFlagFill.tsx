import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMountainFlagFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m276-478 44-88q8-16 22-25t31-9h77v-280h254l-35 70 35 70H510v140h73q17 0 31.5 9t22.5 24l44 90-124 83-77-40-78 39zM80-80l170-344 148 98 82-40 82 41 147-97L880-80z" /></svg>;
export default MaterialMountainFlagFill;