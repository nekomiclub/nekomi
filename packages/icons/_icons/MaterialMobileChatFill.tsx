import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMobileChatFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M260-40q-25 0-42.5-17.5T200-100v-760q0-25 17.5-42.5T260-920h440q25 0 42.5 17.5T760-860v240H550q-38 0-64 26t-26 64v430h45l120-120h135v120q0 25-17.5 42.5T700-40zm260-160v-330q0-13 8.5-21.5T550-560h300q13 0 21.5 8.5T880-530v220q0 13-8.5 21.5T850-280H600zm-20-529q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9" /></svg>;
export default MaterialMobileChatFill;