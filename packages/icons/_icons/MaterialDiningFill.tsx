import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDiningFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M318-193h50v-278q29-4 49.5-26.5T438-549v-154q0-10-7-16.5t-17-6.5-16.5 6.5T391-703v120h-22v-120q0-10-6.5-16.5T346-726t-16.5 6.5T323-703v120h-29v-120q0-10-6.5-16.5T271-726t-16.5 6.5T248-703v154q0 29 20 51.5t50 26.5zm253 0h50v-266q35-14 55-50t20-84q0-57-27.5-95T599-726t-69 38-27 95q0 51 18 86t50 48zM140-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h680q24 0 42 18t18 42v680q0 24-18 42t-42 18z" /></svg>;
export default MaterialDiningFill;