import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNotificationAddFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80m250-360v-130H600v-60h130v-130h60v130h130v60H790v130zM160-200v-60h80v-304q0-84 49.5-150.5T420-798v-22q0-25 17.5-42.5T480-880t42.5 17.5T540-820v22q20 5 39 12.5t36 18.5q-35 31-55.5 73.5T539-600q0 82 51.5 143T720-382v122h80v60z" /></svg>;
export default MaterialNotificationAddFill;