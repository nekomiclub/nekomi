import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAndroidCell5BarAlert: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M40-160v-225h100v225zm195 0v-308h100v308zm195 0v-433h100v433zm438.5-8.68q-8.5-8.67-8.5-21.5 0-12.82 8.68-21.32 8.67-8.5 21.5-8.5 12.82 0 21.32 8.68 8.5 8.67 8.5 21.5 0 12.82-8.68 21.32-8.67 8.5-21.5 8.5-12.82 0-21.32-8.68M860-280v-180h60v180zm-40-228v-292h100v282q-7.5-1-14.62-1.5-7.13-.5-15.38-.5-19 0-36 3t-34 9M625-160v-515h100v235q-23 30-34 65.94-11 35.95-11 74 0 38.06 14 72.56t31 67.5z" /></svg>;
export default MaterialAndroidCell5BarAlert;