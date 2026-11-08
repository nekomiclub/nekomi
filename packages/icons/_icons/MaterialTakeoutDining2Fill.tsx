import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTakeoutDining2Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m124-80 163-655-1-30q-1-23-15.5-39T234-820t-37.5 15-15.5 37v71h-60v-71q0-47 32.5-79.5T233-880h456q45 0 78 30.5t35 75.5l38 694zm78-60h123l-25-397zm318-120h60v-140q26-6 43-27.5t17-49.5v-163h-40v151h-30v-151h-40v151h-30v-151h-40v163q0 28 17 49.5t43 27.5z" /></svg>;
export default MaterialTakeoutDining2Fill;