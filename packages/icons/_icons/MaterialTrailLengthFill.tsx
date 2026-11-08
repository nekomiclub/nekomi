import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTrailLengthFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M270-280v-60h267q-21-21-36-51t-19-59H350v-60h132q4-28 18.5-57.5T537-620H120v-60h560q83 0 141.5 58.5T880-480t-58.5 141.5T680-280zM80-450v-60h240v60zm40 170v-60h120v60z" /></svg>;
export default MaterialTrailLengthFill;