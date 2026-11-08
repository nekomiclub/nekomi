import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCycle: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M352-100q-119-40-195.5-143T80-480q0-32 4.5-64t15.5-63l-64 37-30-51 173-100 100 172-52 30-58-99q-14 33-21.5 67.5T140-480q0 116 68.5 205.5T383-153zm288-520v-60h115q-48-66-120.5-103T480-820q-69 0-128.5 25T246-726l-31-54q54-47 121.5-73.5T480-880q88 0 165.5 35.5T780-744v-76h60v200zM595 0 422-100l100-172 51 30-58 101q130-13 217.5-110T820-480q0-21-2.5-40.5T810-560h62q4 20 6 40t2 40q0 143-89.5 253T562-88l63 37z" /></svg>;
export default MaterialCycle;