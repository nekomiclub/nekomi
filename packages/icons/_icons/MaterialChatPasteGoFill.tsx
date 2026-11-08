import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialChatPasteGoFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m720-124-42-42 73-74H570v-60h181l-73-74 42-42 146 146zM280-580h320v-60H280zm0 170h200v-60H280zM120-120v-620q0-25 17.5-42.5T180-800h520q25 0 42.5 17.5T760-740v223q-10-2-20-2.5t-20-.5q-95 0-167.5 73T480-280q0 10 .5 20t2.5 20H240z" /></svg>;
export default MaterialChatPasteGoFill;