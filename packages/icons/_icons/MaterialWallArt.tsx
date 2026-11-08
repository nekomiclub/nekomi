import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWallArt: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M141-80q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h180l160-160 160 160h180q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-60h680v-520H141zm113-100h460L572-427 446-260l-92-114zm481.5-224.62q14.5-14.62 14.5-35.5t-14.62-35.38-35.5-14.5-35.38 14.62-14.5 35.5 14.62 35.38 35.5 14.5 35.38-14.62M387-720h188l-94-94zM141-140v-520z" /></svg>;
export default MaterialWallArt;