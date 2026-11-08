import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVideoTemplate: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-40q-24 0-42-18t-18-42v-85h60v85h600v-85h60v85q0 24-18 42t-42 18zm-40-205q-24 0-42-18t-18-42v-350q0-24 18-42t42-18h680q24 0 42 18t18 42v350q0 24-18 42t-42 18zm-20-530v-85q0-24 18-42t42-18h600q24 0 42 18t18 42v85h-60v-85H180v85zm20 470h680v-350H140zm269-72 173-103-173-104z" /></svg>;
export default MaterialVideoTemplate;