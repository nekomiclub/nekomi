import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCastle: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M40-120v-470h60v80h110v-330h60v80h100v-80h60v80h100v-80h60v80h100v-80h60v330h110v-80h60v470H570v-120q0-38-26-64t-64-26-64 26-26 64v120zm60-60h230v-60q0-63 43.5-106.5T480-390t106.5 43.5T630-240v60h230v-270H690v-250H270v250H100zm270-310h60v-110h-60zm160 0h60v-110h-60zm-50 50" /></svg>;
export default MaterialCastle;