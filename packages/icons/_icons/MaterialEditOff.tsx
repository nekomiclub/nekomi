import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEditOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m584-455-42-42 154-154-44-44-154 154-42-42 239-239q8-8 19-12.5t23-4.5q11 0 22 4.5t20 12.5l44 44q9 9 13 20t4 22-4.5 22.5T823-694zM181-180h44l233-233-22-22-22-22-233 233zM817-55 500-371 249-120H121v-128l251-251L55-817l42-42L859-97zm-38-682-41-41zm-127 42 44 44zM436-435l-22-22 44 44z" /></svg>;
export default MaterialEditOff;