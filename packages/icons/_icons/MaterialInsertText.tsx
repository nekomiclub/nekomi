import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialInsertText: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-320v-260H330v-60h300v60H510v260zM40-40v-213h79v-454H40v-213h213v79h454v-79h213v213h-79v454h79v213H707v-79H253v79zm213-139h454v-74h74v-454h-74v-74H253v74h-74v454h74zM100-767h93v-93h-93zm667 0h93v-93h-93zm0 667h93v-93h-93zm-667 0h93v-93h-93zm93-93" /></svg>;
export default MaterialInsertText;