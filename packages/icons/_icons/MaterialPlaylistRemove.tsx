import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPlaylistRemove: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m571-80-43-43 114-113-114-113 43-43 113 114 113-114 43 43-114 113 114 113-43 43-113-114zM120-330v-60h300v60zm0-165v-60h470v60zm0-165v-60h470v60z" /></svg>;
export default MaterialPlaylistRemove;