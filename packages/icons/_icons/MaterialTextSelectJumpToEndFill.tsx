import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTextSelectJumpToEndFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-120v-60h60v60zm0-660v-60h60v60zm165 660v-60h60v60zm0-660v-60h60v60zm165 660v-60h60v60zm165 0v-60h60v60zm0-660v-60h60v60zm165 660v-720h60v720zM417-334l-42-42 73-74H120v-60h328l-73-74 42-42 146 146zm33-446v-60h60v60z" /></svg>;
export default MaterialTextSelectJumpToEndFill;