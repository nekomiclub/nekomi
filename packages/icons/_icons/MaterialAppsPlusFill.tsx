import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAppsPlusFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-160h430v-290H450zM80-510h407v-290H80zm0 350h310v-290H80zm620-350v-120H580v-60h120v-120h60v120h120v60H760v120z" /></svg>;
export default MaterialAppsPlusFill;