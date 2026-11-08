import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWbTwilight: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m727-563-42-44 86-84 42 42zM80-170v-60h800v60zm370-510v-120h60v120zM233-564l-85-87 42-42 87 87zm35 184h424q-19-71-77-115.5T480-540t-135 44.5T268-380m-68 60q0-117 81.5-198.5T480-600t198.5 81.5T760-320zm280-60" /></svg>;
export default MaterialWbTwilight;