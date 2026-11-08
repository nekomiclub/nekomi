import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSocialLeaderboardFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M299-120q-91 0-155-64T80-339q0-86 57.5-148.5T281-557L120-880h280l80 160 80-160h280L680-559q85 8 142.5 70.5T880-340q0 92-64 156t-156 64q-9 0-18.5-.5T623-123q59-31 88-90.5T740-340q0-109-75.5-184.5T480-600t-184.5 75.5T220-340q0 66 30 124t86 93q-9 2-18.5 2.5t-18.5.5m39.5-78.5Q280-257 280-340t58.5-141.5T480-540t141.5 58.5T680-340t-58.5 141.5T480-140t-141.5-58.5M406-230l74-56 74 56-28-91 74-53h-91l-29-96-29 96h-91l74 53z" /></svg>;
export default MaterialSocialLeaderboardFill;