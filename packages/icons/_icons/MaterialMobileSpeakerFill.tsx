import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMobileSpeakerFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h398q24 0 42 18t18 42v210L427-400H298v260h129l60 60zm220-609q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9M578-74 452-200h-94v-140h94l126-126zm100 41v-61q63-11 102-61t39-115q0-64-39-114t-102-61v-61q88 11 144.5 79T879-270t-56.5 157T678-33m0-134v-206q31 12 51 40t20 63-20 63-51 40" /></svg>;
export default MaterialMobileSpeakerFill;