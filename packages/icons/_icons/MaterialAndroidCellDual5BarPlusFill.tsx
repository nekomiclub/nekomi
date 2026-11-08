import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAndroidCellDual5BarPlusFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M40-384v-181h100v181zm195 0v-244h100v244zm195 0v-289h100v289zM40-160v-164h100v164zm195 0v-164h100v164zm195 0v-164h100v164zm390-303v-337h100v352q-24-10-49-13.5t-51-1.5m-95 33q-14 9-26.5 20.5T675-384h-50v-331h100zm85 286v-80h-80v-60h80v-80h60v80h80v60h-80v80z" /></svg>;
export default MaterialAndroidCellDual5BarPlusFill;