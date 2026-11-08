import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBook4Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M280-320h60v-500h-60zM240-80q-50 0-85-35t-35-85v-560q0-50 35-85t85-35h420v620H240q-25 0-42.5 17.5T180-200t17.5 42.5T240-140h540v-660h60v720z" /></svg>;
export default MaterialBook4Fill;