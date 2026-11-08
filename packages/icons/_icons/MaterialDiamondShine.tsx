import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDiamondShine: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M482-80 123-433l197-240h323l198 240zM173-701l-72-70 43-44 71 72zm279-78v-101h60v101zm336 78-42-42 72-72 42 44zM482-164l246-242H236zM349-613 228-466h508L615-613z" /></svg>;
export default MaterialDiamondShine;