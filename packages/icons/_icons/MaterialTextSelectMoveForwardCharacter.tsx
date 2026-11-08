import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTextSelectMoveForwardCharacter: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-120v-60h60v60zm0-660v-60h60v60zm165 660v-60h60v60zm0-660v-60h60v60zm165 660v-60h60v60zm0-660v-60h60v60zM120-120v-60h83v-600h-83v-60h225v60h-82v600h82v60zm574-214-42-42 73-74H450v-60h275l-73-74 42-42 146 146z" /></svg>;
export default MaterialTextSelectMoveForwardCharacter;