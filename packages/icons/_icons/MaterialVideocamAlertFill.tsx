import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVideocamAlertFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M465-160q23-34 35-72t12-79q0-112-79-191t-191-79q-45 0-86 14t-76 40v-213q0-24 18-42t42-18h520q24 0 42 18t18 42v215l160-160v410L720-435v215q0 24-18 42t-42 18zm-357-16.5Q52-232 52-310q0-79 56-135t134-56 134 56 56 135q0 78-56 133.5T242-121t-134-55.5M224-282h35v-143h-35zm18 85q9 0 15.5-6t6.5-16-6.5-16-15.5-6q-10 0-16 6t-6 16 6 16 16 6" /></svg>;
export default MaterialVideocamAlertFill;