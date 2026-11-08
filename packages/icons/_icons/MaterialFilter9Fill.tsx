import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFilter9Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M469-338h126q24 0 42-18t18-42v-285q0-24-18-42t-42-18H485q-24 0-42 18t-18 42v113q0 24 18 42t42 18h110v112H469zm126-232H485v-113h110zM260-200q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18zM140-80q-24 0-42-18t-18-42v-620h60v620h620v60z" /></svg>;
export default MaterialFilter9Fill;