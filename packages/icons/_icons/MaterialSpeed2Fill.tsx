import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSpeed2Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M542-340q26-26 24.5-61.5T536-456q-83-54-168.5-111.5T200-680q54 83 111.5 168.5T424-344q19 29 55 30t63-26M192-160q-18 0-33.5-8.5T133-193q-26-47-39.5-99T80-399q0-81 32-152.5T200-680q55-57 129-88.5T482-800q83 0 155.5 31.5T764-682t85 127.5T880-399q0 55-14 106.5T826-193q-9 16-25 24.5t-33 8.5z" /></svg>;
export default MaterialSpeed2Fill;