import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSimCardDownload: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m482-278 156-156-43-43-83 83v-194h-60v194l-83-83-43 43zM220-80q-24 0-42-18t-18-42v-501l239-239h341q24 0 42 18t18 42v680q0 24-18 42t-42 18zm0-60h520v-680H426L220-613.88zm0 0h520z" /></svg>;
export default MaterialSimCardDownload;