import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPartnerReports: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M460-288.63q-9-8.62-9-21.37 0-12 9-21t21-9 21 9 9 21.5-9 21-21 8.5-21-8.63M451-440v-400h60v400zM180-120q-24 0-42-18t-18-42v-143h60v143h600v-143h60v143q0 24-18 42t-42 18z" /></svg>;
export default MaterialPartnerReports;