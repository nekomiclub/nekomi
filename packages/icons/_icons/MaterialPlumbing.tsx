import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPlumbing: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M781-597 650-728 545-622 444-723l127-127q11-11 23-15.5t26-4.5 26.5 4.5T670-850l104 104q15 15 23 34t9 39-5 39.5-20 36.5M238-416q-20-20-20-51.5t20-51.5l91-92 103 103-92 92q-22 22-52 21t-50-21m-64 307q-10-10-15-23t-5-27 5-27 15-23l300-299-144-145q-15-15-15-35t15-35 35.5-15 35.5 15l144 144 57-57 105 107q9 9 9 21t-9 21q-13 13-25.5 8.5T658-494L273-109q-10 10-22.5 15T224-89t-27-5-23-15" /></svg>;
export default MaterialPlumbing;