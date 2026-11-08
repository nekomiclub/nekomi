import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWallArtFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M141-80q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h180l160-160 160 160h180q24 0 42 18t18 42v520q0 24-18 42t-42 18zm113-160h460L572-427 446-260l-92-114zm481.5-224.5Q750-479 750-500t-14.5-35.5T700-550t-35.5 14.5T650-500t14.5 35.5T700-450t35.5-14.5M387-720h188l-94-94z" /></svg>;
export default MaterialWallArtFill;