import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSelectWindow2Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M820-368v-234q0-38-26-64t-64-26H244v-128q0-24 18-42t42-18h516q24 0 42 18t18 42v392q0 24-18 42t-42 18M140-80q-24 0-42-18t-18-42v-432q0-24 18-42t42-18h548q30 0 51 21t21 50v421q0 24-18 42t-42 18z" /></svg>;
export default MaterialSelectWindow2Fill;