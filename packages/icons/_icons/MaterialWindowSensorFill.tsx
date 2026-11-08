import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWindowSensorFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M858.5-618.63Q850-627.25 850-640v-160q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v160q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63-12.82 0-21.32-8.63M120-120v-720h640v720zm90-390h190v-40h80v40h190v-240H210zm0 300h460v-240H210zm-30 30h520v-600H180z" /></svg>;
export default MaterialWindowSensorFill;