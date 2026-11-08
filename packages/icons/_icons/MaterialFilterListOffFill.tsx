import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFilterListOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M813-61 61-813l43-43 752 752zM595-450l-60-60h185v60zM385-660l-60-60h515v60zm15 420v-60h160v60zM240-450v-60h184v60zM120-660v-60h94v60z" /></svg>;
export default MaterialFilterListOffFill;