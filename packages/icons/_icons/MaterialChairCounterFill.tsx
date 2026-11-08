import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialChairCounterFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M283-80v-43q38-27 79.5-40.5T450-180v-105H325v-60h125v-269h-74q-21 0-32.5-12T325-656h-95q-28 0-49-18.5T160-722q0-66 43.5-112T313-880h333q66 0 110 46t44 112q0 29-21 47.5T729-656h-95q-7 17-18 29.5T584-614h-74v269h124v60H510v105q45 3 87 16.5t79 40.5v43z" /></svg>;
export default MaterialChairCounterFill;