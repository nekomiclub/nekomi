import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTrailLength: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M270-280v-60h267q-21-21-36-51t-19-59H350v-60h132q4-28 18.5-57.5T537-620H120v-60h560q83 0 141.5 58.5T880-480t-58.5 141.5T680-280zm409.76-60Q738-340 779-380.76q41-40.77 41-99Q820-538 779.24-579q-40.77-41-99-41Q622-620 581-579.24q-41 40.77-41 99Q540-422 580.76-381q40.77 41 99 41M80-450v-60h240v60zm40 170v-60h120v60zm560-200" /></svg>;
export default MaterialTrailLength;