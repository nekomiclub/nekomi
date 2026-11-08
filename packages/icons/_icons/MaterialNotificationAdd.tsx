import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNotificationAdd: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80m250-360v-130H600v-60h130v-130h60v130h130v60H790v130zM160-200v-60h80v-304q0-84 49.5-150.5T420-798v-22q0-25 17.5-42.5T480-880t42.5 17.5T540-820v22q20 5 39.04 12.31T615-767q-12 11-22.5 23T573-718q-20-12-43.5-19t-49.5-7q-75 0-127.5 52.5T300-564v304h360v-143q14 7 28.84 12.44 14.84 5.45 31.16 8.56v122h80v60z" /></svg>;
export default MaterialNotificationAdd;