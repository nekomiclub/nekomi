import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAnchorFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M349.5-104Q285-128 234-167t-82.5-88T120-355v-100l135 101-58 58q31 58 106 103.5T450-142v-388H320v-60h130v-74q-38-14-59-42t-21-64q0-46 32.5-78t77.5-32q46 0 78 32t32 78q0 36-21 64t-59 42v74h130v60H510v388q72-5 147-50.5T763-296l-58-58 135-101v100q0 51-31.5 100T726-167t-115.5 63T480-80t-130.5-24M480-720q21 0 35.5-15t14.5-35q0-21-14.5-35.5T480-820q-20 0-35 14.5T430-770q0 20 15 35t35 15" /></svg>;
export default MaterialAnchorFill;