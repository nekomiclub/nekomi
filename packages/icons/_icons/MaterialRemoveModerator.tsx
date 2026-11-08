import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRemoveModerator: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m743-295-45-46q20-35 31-89.5t11-93.5v-196l-260-96-188 69-46-46 234-88 320 119v238q0 59.44-15 117.72T743-295m67 238L670-195q-44 44-90 72T480-81q-143-39-231.5-164.43T160-524v-183L55-812l43-43 755 755zm-330-86q42.07-14.02 80.54-39.51Q599-208 628-238L220-647v123q0 130.1 73 236.55T480-143" /></svg>;
export default MaterialRemoveModerator;