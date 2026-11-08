import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHomeRepairServiceFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M340-640h280v-100H340zM80-160v-210h160v60h60v-60h360v60h60v-60h160v210zm0-270v-150q0-24.75 17.63-42.38Q115.25-640 140-640h140v-100q0-24.75 17.63-42.38Q315.25-800 340-800h280q24.75 0 42.38 17.62Q680-764.75 680-740v100h140q24.75 0 42.38 17.62Q880-604.75 880-580v150H720v-60h-60v60H300v-60h-60v60z" /></svg>;
export default MaterialHomeRepairServiceFill;