import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTakeoutDining2: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m124-80 163-655-1-30q-1-23-15.34-39t-36.5-16-37.66 14.95T181-768v71h-60v-71q0-46.67 32.67-79.33Q186.33-880 233-880h456q45 0 78 30.5t35 75.5l38 694zm78-60h123l-25-397zm183 0h392l-35-631q-2-21-17.04-35T689-820H334q5 13 8 26t4 27zm135-120h60v-140q26-6 43-27.5t17-49.5v-163h-40v151h-30v-151h-40v151h-30v-151h-40v163q0 28 17 49.5t43 27.5zM385-140h392z" /></svg>;
export default MaterialTakeoutDining2;