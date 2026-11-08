import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFilter2: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M428-338h230v-60H488v-112h110q24 0 42-18t18-42v-113q0-24-18-42t-42-18H428v60h170v113H488q-24.75 0-42.37 18Q428-534 428-510zM260-200q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18zm0-60h560v-560H260zM140-80q-24 0-42-18t-18-42v-620h60v620h620v60zm120-740v560z" /></svg>;
export default MaterialFilter2;