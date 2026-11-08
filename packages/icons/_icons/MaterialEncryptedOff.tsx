import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEncryptedOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M524-515q12-10 19-24t7-31q0-29-20.5-49.5T480-640q-17 0-31 7t-24 19zm219 220-45-46q20-35 31-89.5t11-93.5v-196l-260-96-188 69-46-46 234-88 320 119v238q0 59-15 117.5T743-295m67 238L670-195q-44 44-90 72T480-81q-143-39-231.5-164.5T160-524v-183L55-812l43-43 755 755zm-330-86q42-14 80.5-39.5T628-238L506-360h-77l11-66-220-221v123q0 130 73 236.5T480-143" /></svg>;
export default MaterialEncryptedOff;