import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDataTableFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-628h720v-172H120zm0 234h720v-172H120zm0 234h720v-172H120zm63-524v-60h60v60zm0 234v-60h60v60zm0 234v-60h60v60z" /></svg>;
export default MaterialDataTableFill;