import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialParentChildDiningFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M377-656q-47 0-79.5-32.5T265-768q0-46 32.5-79t79.5-33q46 0 79 33t33 79q0 47-33 79.5T377-656M40-80v-60h81v-337q0-26 23-53t64-47q37-18 80.5-28t88.5-10 89.5 10.5T548-575q39 20 61.5 46t22.5 52v113H465q2-5 2-10.5V-385q0-38-26-64t-64-26-64 26-26 64 26 64 64 26q29 0 51.5-15.5T461-352l28 111q-27-7-56-10.5t-56-3.5q-57 0-113.5 14.5T181-206v66h395l-41-164h382l-35 139q-2 7-4 13t-5 12h47v60z" /></svg>;
export default MaterialParentChildDiningFill;