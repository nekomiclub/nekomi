import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVerticalAlignCenterFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-80v-202l-86 86-44-44 160-160 160 160-44 44-86-86v202zM160-450v-60h640v60zm320-110L320-720l44-44 86 86v-202h60v202l86-86 44 44z" /></svg>;
export default MaterialVerticalAlignCenterFill;