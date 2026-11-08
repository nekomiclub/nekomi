import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFindInPageFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h372l208 239v482L601-358q13-16 19.5-37t6.5-44q0-62-42.5-104.5T480-586t-104.5 42.5T333-439t42.5 104.5T480-292q23 0 42.5-5t39.5-17l212 212q-13 11-29 16.5T712-80zm198.5-297.5Q393-403 393-439t25.5-61.5T480-526t61.5 25.5T567-439t-25.5 61.5T480-352t-61.5-25.5" /></svg>;
export default MaterialFindInPageFill;