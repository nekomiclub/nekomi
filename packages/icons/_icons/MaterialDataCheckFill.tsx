import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDataCheckFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m612-550 141-142-28-28-113 113-57-57-28 29zM120-160v-60h480v60zm385.5-345.61q-55.5-55.6-55.5-134.5 0-78.89 55.61-134.39 55.6-55.5 134.5-55.5 78.89 0 134.39 55.61 55.5 55.6 55.5 134.5 0 78.89-55.61 134.39-55.6 55.5-134.5 55.5-78.89 0-134.39-55.61M120-500v-60h262q5.32 16.32 12.16 31.16T409-500zm0 170v-60h419q13.8 6.36 29.4 10.68T600-373v43z" /></svg>;
export default MaterialDataCheckFill;