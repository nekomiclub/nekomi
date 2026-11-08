import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialViewRealSize: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M284-280v-340h-84v-60h144v400zm167 0v-60h60v60zm209 0v-340h-84v-60h144v400zM451-450v-60h60v60z" /></svg>;
export default MaterialViewRealSize;