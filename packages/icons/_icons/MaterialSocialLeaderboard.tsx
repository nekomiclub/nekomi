import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSocialLeaderboard: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M621.5-198.26q58.5-58.27 58.5-141.5 0-83.24-58.26-141.74-58.27-58.5-141.5-58.5-83.24 0-141.74 58.26-58.5 58.27-58.5 141.5 0 83.24 58.26 141.74 58.27 58.5 141.5 58.5 83.24 0 141.74-58.26M346-563q28-17 60-26.5t67-10.5L363-820H217zm268 0 129-257H597l-83 167 30 60q19 5 36.5 12.5T614-563M273-183q-25-33-39-72.5T220-340t14-84.5 39-72.5q-57 10-95 53.5T140-340t38 103.5 95 53.5m414 0q57-10 95-53.5T820-340t-38-103.5-95-53.5q25 33 39 72.5t14 84.5-14 84.5-39 72.5M403.5-91.5Q367-103 336-123q-9 2-18 2.5t-19 .5q-91 0-155-64T80-339q0-87 58-149t143-69L120-880h280l80 160 80-160h280L680-559q85 8 142.5 70T880-340q0 92-64 156t-156 64q-9 0-18.5-.5T623-123q-31 20-67 31.5T480-80t-76.5-11.5M346-563 217-820zm268 0 129-257zM406-230l28-91-74-53h91l29-96 29 96h91l-74 53 28 91-74-56z" /></svg>;
export default MaterialSocialLeaderboard;