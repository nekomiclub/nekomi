import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTextUp: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M440-200v-60h400v60zm170-160v-286l-74 74-42-42 146-146 146 146-42 42-74-74v286zm-490 0 147-360h42l147 360h-44l-39-100H203l-39 100zm97-136h142l-69-178h-4z" /></svg>;
export default MaterialTextUp;