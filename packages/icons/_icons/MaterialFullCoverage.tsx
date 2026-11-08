import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFullCoverage: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-120q-24 0-42-18t-18-42v-489h60v489h614v60zm169-171q-24 0-42-18t-18-42v-489h671v489q0 24-18 42t-42 18zm0-60h551v-429H309zm86-131h168v-215H395zm211 0h168v-88H606zm0-127h168v-88H606zM309-351v-429z" /></svg>;
export default MaterialFullCoverage;