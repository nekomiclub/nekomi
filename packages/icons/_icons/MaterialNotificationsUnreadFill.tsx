import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNotificationsUnreadFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80M160-200v-60h80v-304q0-84 49.5-150.5T420-798v-22q0-25 17.5-42.5T480-880q23 0 39 14.5t20 35.5q-14 23-21 48.5t-7 51.5q0 69 42.5 120.5T660-544q15 3 30 4t30-1v281h80v60zm463-452q-32-32-32-78t32-78 78-32 78 32 32 78-32 78-78 32-78-32" /></svg>;
export default MaterialNotificationsUnreadFill;