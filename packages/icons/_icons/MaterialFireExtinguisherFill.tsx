import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFireExtinguisherFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M280-304v-146h400v146zm238.5-423.5Q534-743 534-766t-15.5-38.5T480-820t-38.5 15.5T426-766t15.5 38.5T480-712t38.5-15.5M282-510q8-57 45-100t91-60q-14-9-25-22t-18-29l-165-33v-24l165-33q13-31 41.5-50t63.5-19q23 0 43 8.5t36 23.5l151-30v224l-151-30q-4 4-8 7.5t-9 6.5q54 17 91 60t45 100zm58 430q-24 0-42-18t-18-42v-104h400v104q0 24-18 42t-42 18z" /></svg>;
export default MaterialFireExtinguisherFill;