import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStackedEmail: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M220-240q-24 0-42-18.5T160-300v-480q0-24 18-42t42-18h640q24 0 42 18t18 42v480q0 23-18 41.5T860-240zm320-200L220-706v406h640v-406zm0-79 315-261H225zM100-120q-24 0-42-18.5T40-180v-559h60v559h720v60zm760-586v-74H220v74-74h640z" /></svg>;
export default MaterialStackedEmail;