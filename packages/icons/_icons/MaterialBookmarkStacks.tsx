import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBookmarkStacks: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-245 65-467l63-34 352 188 353-188 63 34zm0 165L65-302l63-34 352 188 353-188 63 34zm0-330L41-645l439-235 32 17-2 188h354l56 30zm0-69 259-136H450v-180L166-645zm-30-136" /></svg>;
export default MaterialBookmarkStacks;