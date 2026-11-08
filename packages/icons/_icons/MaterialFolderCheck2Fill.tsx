import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFolderCheck2Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M862.5-372.5Q919-316 919-235T862.5-97.5 725-41 587.5-97.5 531-235t56.5-137.5T725-429t137.5 56.5M471-220q1 16 3.5 31t7.5 29H140q-24 0-42-18.5T80-220v-520q0-23 18-41.5t42-18.5h281l60 60h339q23 0 41.5 18.5T880-680v244q-33-26-73-39.5T725-489q-110 0-185.5 79.5T471-220m227 70 141-142-28-28-113 114-59-60-28 29z" /></svg>;
export default MaterialFolderCheck2Fill;