import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDiscoverTuneFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M520-590v-60h130v-190h60v190h130v60zm130 470v-410h60v410zm-400 0v-180H120v-60h320v60H310v180zm0-300v-420h60v420z" /></svg>;
export default MaterialDiscoverTuneFill;