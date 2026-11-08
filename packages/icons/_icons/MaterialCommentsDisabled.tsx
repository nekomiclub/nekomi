import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCommentsDisabled: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-240q-23 0-41.5-18.5T80-300v-494l-54-54 43-43L876-84l-43 43-199-199zm740 74L746-300h74v-520H226l-60-60h654q24 0 42 18.5t18 41.5zM140-300h434L474-400H240v-60h174l-70-70H240v-60h44L140-734zm506-100-60-60h134v60zM516-530l-60-60h264v60zM386-660l-60-60h394v60zm100 100" /></svg>;
export default MaterialCommentsDisabled;