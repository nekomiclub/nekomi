import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCommentsDisabledFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M833-41 634-240H140q-23 0-41.5-18.5T80-300v-494l-54-54 43-43L876-84zm47-125L646-400h74v-60H586l-70-70h204v-60H456l-70-70h334v-60H326L166-880h654q24 0 42 18.5t18 41.5zM240-400h234l-60-60H240zm0-130h104l-60-60h-44z" /></svg>;
export default MaterialCommentsDisabledFill;