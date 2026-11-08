import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEmojiFoodBeverageFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-120v-60h640v60zm564-500h96v-160h-96zM311-260q-63 0-107-43.5T160-410v-430h197v93l-72 58q-3 2-9 18v150q0 9.6 7 16.8t18 7.2h151q11 0 18-7.2t7-16.8v-150q0-3-9-18l-71-58v-93h423q24.75 0 42.38 17.62Q880-804.75 880-780v160q0 24.75-17.62 42.37Q844.75-560 820-560h-96v150q0 63-44 106.5T573-260z" /></svg>;
export default MaterialEmojiFoodBeverageFill;