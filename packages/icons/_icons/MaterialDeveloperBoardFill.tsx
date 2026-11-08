import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDeveloperBoardFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M150-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v60h60v60h-60v150h60v60h-60v150h60v60h-60v60q0 24-18 42t-42 18zm60-120h253v-200H210zm283-336h197v-144H493zM210-470h253v-250H210zm283 230h197v-306H493z" /></svg>;
export default MaterialDeveloperBoardFill;