import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSpeed3Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M519-323q33-16 44-49.5T553-434q-61-82-121-164L312-762q24 100 48 197.5T409-367q8 35 42 47.5t68-3.5M192-160q-18 0-33.5-8.5T133-193q-26-47-39.5-99T80-399q0-81 32.5-153.5t88-127.5 128-87.5T482-800q83 0 155.5 31.5T764-682t85 127.5T880-399q0 55-14 106.5T826-193q-9 16-25 24.5t-33 8.5z" /></svg>;
export default MaterialSpeed3Fill;