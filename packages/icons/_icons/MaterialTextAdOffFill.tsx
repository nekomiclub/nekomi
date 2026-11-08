import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTextAdOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M210-290h374l-60-60H210zm0-160h214l-60-60H210zm0-160h54l-60-60h6zM813-61l-99-99H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h20l60 60h-86L26-848l43-43 787 787zm52-120L596-450h154v-60H536L436-610h152v-60H376L246-800h574q24 0 42 18t18 42v520q0 11-4 21t-11 18" /></svg>;
export default MaterialTextAdOffFill;