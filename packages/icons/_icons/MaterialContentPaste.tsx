import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialContentPaste: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-120q-26 0-43-17t-17-43v-600q0-26 17-43t43-17h202q7-35 34.5-57.5T480-920t63.5 22.5T578-840h202q26 0 43 17t17 43v600q0 26-17 43t-43 17zm0-60h600v-600h-60v90H240v-90h-60zm328.5-611.5Q520-803 520-820t-11.5-28.5T480-860t-28.5 11.5T440-820t11.5 28.5T480-780t28.5-11.5" /></svg>;
export default MaterialContentPaste;