import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWbIridescent: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M216-376v-208h528v208zm236-394v-110h60v110zm297 107-42-42 68-68 42 42zM452-80v-110h60v110zm323-110-68-68 42-42 68 68zM211-663l-68-68 42-42 68 68zm-26 473-42-42 68-68 42 42zm91-246h408v-88H276zm0 0v-88z" /></svg>;
export default MaterialWbIridescent;