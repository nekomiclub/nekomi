import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPrivacyFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M848-27 39-836l42-42L890-69zm32-248L720-435v111L460-584v-26q0-25-17.5-42.5T400-670q-6 0-11.5 1t-10.5 3L244-800h416q24 0 42 18t18 42v215l160-160zM140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h19l561 561v19q0 24-18 42t-42 18H428v-142q35-6 65-24t51-47l-43-43q-17 26-43.5 41T400-360q-50 0-85-35t-35-85h-60q0 67 43 117t109 61v142zm200-375v55q0 25 17.5 42.5T400-420q11 0 21.5-4t18.5-11z" /></svg>;
export default MaterialPrivacyFill;