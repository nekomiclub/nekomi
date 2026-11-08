import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTextSelectEnd: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-780v-60h60v60zm0 660v-60h60v60zM285-780v-60h60v60zm0 660v-60h60v60zM120-780v-60h60v60zm0 165v-60h60v60zm0 165v-60h60v60zm0 165v-60h60v60zm0 165v-60h60v60zm495 0v-60h82v-600h-82v-60h225v60h-83v600h83v60z" /></svg>;
export default MaterialTextSelectEnd;