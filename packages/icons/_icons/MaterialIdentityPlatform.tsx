import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialIdentityPlatform: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M388-488.1q-38-38.1-38-92t38.1-91.9 92-38 91.9 38.1 38 92-38.1 91.9-92 38-91.9-38.1m141.5-42.28q20.5-20.38 20.5-49.5t-20.38-49.62-49.5-20.5-49.62 20.38-20.5 49.5 20.38 49.62 49.5 20.5 49.62-20.38M480-60 120-280v-400l360-220 360 220v400zm0-71 167-101q-35-29-78-43.5T480-290t-89 14.5-78 43.5zM256-267q48-38 105-60.5T480-350t119 22.5T704-267l76-45v-334.23L480-830 180-646.23V-312zm224-214" /></svg>;
export default MaterialIdentityPlatform;