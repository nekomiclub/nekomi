import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEarbudRight: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M551-80q-24 0-42-18t-18-42v-351H386v-60h165v411h106v-411h123v-189H386v-60h394q24 0 42 18t18 42v189q0 24-18 42t-42 18h-63v351q0 24-18 42t-42 18zM356-409q-98.33 0-167.17-68.76-68.83-68.77-68.83-167 0-98.24 68.83-166.74Q257.67-880 356-880h30v471zm-30-62v-347q-63 16-104.5 63T180-645t41.5 110.5T326-471m0-174" /></svg>;
export default MaterialEarbudRight;