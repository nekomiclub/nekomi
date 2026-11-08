import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEncryptedOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m440-426-11 66h77zM810-57 670-195q-44 44-90 72T480-81q-143-39-231.5-164.5T160-524v-183L55-812l43-43 755 755zm-67-238L523-515q12-10 19.5-24t7.5-31q0-29-20.5-49.5T480-640q-17 0-31 7.5T425-613L246-793l234-88 320 119v238q0 59-15 117.5T743-295" /></svg>;
export default MaterialEncryptedOffFill;