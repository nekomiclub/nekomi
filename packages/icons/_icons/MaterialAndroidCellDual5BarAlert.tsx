import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAndroidCellDual5BarAlert: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M40-384v-181h100v181zm195 0v-244h100v244zm195 0v-289h100v289zM40-160v-164h100v164zm195 0v-164h100v164zm195 0v-164h100v164zm390-348v-292h100v282q-7.5-1-14.62-1.5-7.13-.5-15.38-.5-19 0-36 3t-34 9M625-384v-331h100v275q-10 12.81-18 26.91Q699-399 693-384zm0 224v-164h55q-3 46 13.5 89t49.5 75zm243.5-8.68q-8.5-8.67-8.5-21.5 0-12.82 8.68-21.32 8.67-8.5 21.5-8.5 12.82 0 21.32 8.68 8.5 8.67 8.5 21.5 0 12.82-8.68 21.32-8.67 8.5-21.5 8.5-12.82 0-21.32-8.68M860-280v-180h60v180z" /></svg>;
export default MaterialAndroidCellDual5BarAlert;