import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialChatPasteGo: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m720-124-42-42 73-74H570v-60h181l-73-74 42-42 146 146zm-600 4v-620q0-24.75 17.63-42.38Q155.25-800 180-800h520q24.75 0 42.38 17.62Q760-764.75 760-740v223q-10-2-20-2.5t-20-.5q-5 0-10 .17-5 .16-10 .83v-221H180v440h301q-.67 5-.83 10-.17 5-.17 10 0 10 .5 20t2.5 20H240zm160-460h320v-60H280zm0 170h200v-60H280zM180-300v-440z" /></svg>;
export default MaterialChatPasteGo;