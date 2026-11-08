import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPipExitFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m697-300 43-43-151-150h118v-60H487v220h60v-117zM80-580v-220h300v220zm0 60h360v-280h380q24 0 42 18t18 42v520q0 24-18 42t-42 18H140q-24 0-42-18t-18-42z" /></svg>;
export default MaterialPipExitFill;