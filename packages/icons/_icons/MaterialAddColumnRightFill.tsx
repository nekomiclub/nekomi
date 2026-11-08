import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAddColumnRightFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-120v-720h329v720zm389 0v-720h331v152q-7.5-1-14.62-1.5-7.13-.5-15.38-.5-88 0-149 60.9T560-480t61.5 149.1T770-270q8.25 0 15.38-.5 7.12-.5 14.62-1.5v152zm271-250v-80h-80v-60h80v-80h60v80h80v60h-80v80z" /></svg>;
export default MaterialAddColumnRightFill;