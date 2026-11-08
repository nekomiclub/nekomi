import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNotificationImportantFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-200v-60h80v-304q0-84 49.5-150.5T420-798v-22q0-25 17.5-42.5T480-880t42.5 17.5T540-820v22q81 17 130.5 83.5T720-564v304h80v60zM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80m-30-346h60v-214h-60zm29.98 106q14.02 0 23.52-9.48t9.5-23.5-9.48-23.52-23.5-9.5-23.52 9.48-9.5 23.5 9.48 23.52 23.5 9.5" /></svg>;
export default MaterialNotificationImportantFill;