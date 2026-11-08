import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSpaFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M491-79q-82-9-156.5-44T204-218t-89.5-142.5T80-546q96 1 172 31.5t129 89T462.5-280 491-79m-12-308q-29-50-59-82t-83-66q4-44 16.5-90.5T385-717t43-87 51-75q27 33 51.5 74.5t44 88 32 94T623-530q-44 20-81 59t-63 84m72 293q-3-64-12-124t-26-104q43-97 143-162.5T880-548q-8 180-94 294.5T551-94" /></svg>;
export default MaterialSpaFill;