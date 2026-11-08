import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialShutterSpeed: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M351-860v-60h258v60zM482-80q-75 0-141-28.5t-115-78T148.5-302 120-443q0-74 28.5-139t77-113.5 114-76.5T479-800q66 0 126.5 22.5T715-712l57-57 43 44-57 57q40 48 61 107t21 122q0 74-28 139.5t-76.5 114-114 77T482-80m-6-436h294q-20-68-65-121.5T594-718zm-68 45 152-259q-71-18-142-4.5T292-673zm-224 76h226L264-649q-48 52-69.5 118.5T184-395m186 235 113-199H192q20 68 66.5 120T370-160m36 10q69 17 137.5 3.5T668-204L550-403zm289-79q46-52 69.5-117T777-480H546z" /></svg>;
export default MaterialShutterSpeed;