import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSliders: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M201-360q-53 0-86.5-33.5T81-480t33.5-86.5T201-600h558q53 0 86.5 33.5T879-480t-33.5 86.5T759-360zm365-60h197q26 0 43-17t17-43q0-34-17-47t-43-13H566z" /></svg>;
export default MaterialSliders;