import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGameTriggerLeft: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M298-339h173v-46H348v-235h-50zm269 0h50v-235h84v-46H482v46h85zM80-160v-486q0-63.53 44.5-108.76Q169-800 233-800h494q64 0 108.5 45.24Q880-709.53 880-646v486zm60-60h680v-426q0-38.78-27-66.39T727-740H233q-39 0-66 27.61T140-646zm0 0h680z" /></svg>;
export default MaterialGameTriggerLeft;