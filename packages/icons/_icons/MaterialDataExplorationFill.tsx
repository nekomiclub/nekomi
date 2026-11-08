import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDataExplorationFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M798-133q13 0 21.5-9t8.5-21q0-13-9-21.5t-21-8.5-21 8.5-9 21.5q0 12 9 21t21 9M476-80q-109 0-197.5-51.5T142-264l182-182 132 112 194-193v77h60v-180H530v60h77L453-415 321-527 113-319q-18-38-25.5-80T80-476q0-83 31.5-156.5T197-761t127-87 156-32 156 32 127 87 85.5 128.5T880-476v314q0 34-24 58t-58 24z" /></svg>;
export default MaterialDataExplorationFill;