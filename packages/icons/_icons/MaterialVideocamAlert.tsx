import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVideocamAlert: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M660-160H465q10.16-13.66 17.58-28.83T496-220h164v-520H140v179q-17 7-31.5 15T80-527v-213q0-24 18-42t42-18h520q24 0 42 18t18 42v215l160-160v410L720-435v215q0 24-18 42t-42 18m-552-16.4q-56-55.4-56-134T108-445t134-56 134 55.87q56 55.86 56 135.13 0 78.43-56 133.72Q320-121 242-121t-134-55.4M241.5-197q9.5 0 16-6t6.5-16-6.6-16-15.4-6q-10 0-16 6t-6 16 6 16 15.5 6M224-282h35v-143h-35z" /></svg>;
export default MaterialVideocamAlert;