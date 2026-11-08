import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPlaylistAddFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-330v-60h300v60zm0-165v-60h470v60zm0-165v-60h470v60zm530 500v-170H480v-60h170v-170h60v170h170v60H710v170z" /></svg>;
export default MaterialPlaylistAddFill;