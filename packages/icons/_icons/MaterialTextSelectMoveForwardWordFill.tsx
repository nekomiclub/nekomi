import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTextSelectMoveForwardWordFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m694-334-42-42 73-74H450v-60h275l-73-74 42-42 146 146zM120-120v-720h225v720zm330 0v-60h60v60zm0-660v-60h60v60zm165 660v-60h60v60zm0-660v-60h60v60zm165 660v-60h60v60zm0-660v-60h60v60z" /></svg>;
export default MaterialTextSelectMoveForwardWordFill;