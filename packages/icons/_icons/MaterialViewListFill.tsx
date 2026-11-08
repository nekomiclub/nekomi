import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialViewListFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M350-160h470q24.75 0 42.38-17.63Q880-195.25 880-220v-114H350zM80-626h210v-174H140q-24.75 0-42.37 17.62Q80-764.75 80-740zm0 233h210v-173H80zm60 233h150v-174H80v114q0 24.75 17.63 42.37Q115.25-160 140-160m210-233h530v-173H350zm0-233h530v-114q0-24.75-17.62-42.38Q844.75-800 820-800H350z" /></svg>;
export default MaterialViewListFill;