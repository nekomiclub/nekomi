import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMenuOpenFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-240v-60h520v60zm678-52L609-481l188-188 43 43-145 145 146 146zM120-452v-60h400v60zm0-208v-60h520v60z" /></svg>;
export default MaterialMenuOpenFill;