import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAccountBalance: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M212-241v-339h60v339zm242 0v-339h60v339zM80-121v-60h800v60zm608-120v-339h60v339zM80-640v-53l400-228 400 228v53zm134-60h532zm0 0h532L480-852z" /></svg>;
export default MaterialAccountBalance;