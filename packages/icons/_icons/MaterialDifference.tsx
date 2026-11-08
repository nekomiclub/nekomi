import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDifference: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M490-526h60v-84h84v-60h-84v-84h-60v84h-84v60h84zm-84 156h228v-60H406zM260-160q-24 0-42-18t-18-42v-640q0-24 18-42t42-18h348l232 232v468q0 24-18 42t-42 18zm0-60h520v-442L578-860H260zM140-40q-24 0-42-18t-18-42v-619h60v619h498v60zm120-180v-640z" /></svg>;
export default MaterialDifference;