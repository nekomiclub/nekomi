import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAddDiamond: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-323h60v-126h127v-60H510v-127h-60v127H324v60h126zm30 243q-11 0-22-4.5T438-97L98-437q-8-9-12.5-20T81-479t4.5-22.5T98-521l340-341q9-9 20-13t22.5-4 22.5 4 19 13l341 341q9 8 13 19.5t4 22.5-4 22-13 20L522-97q-8.11 8.13-19.16 12.57Q491.79-80 480-80m0-60 340-339-340-340-339 340zm1-340" /></svg>;
export default MaterialAddDiamond;