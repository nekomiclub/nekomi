import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRemoveModeratorFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M743-295 246-793l234-88 320 119v238q0 59-15 117.5T743-295m67 238L670-195q-44 44-90 72T480-81q-143-39-231.5-164.5T160-524v-183L55-812l43-43 755 755z" /></svg>;
export default MaterialRemoveModeratorFill;