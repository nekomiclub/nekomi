import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHomeRepairService: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-160v-420q0-24 18-42t42-18h140v-100q0-24 18-42t42-18h280q24 0 42 18t18 42v100h140q24 0 42 18t18 42v420zm220-210v60h-60v-60H140v150h680v-150H720v60h-60v-60zM140-580v150h100v-60h60v60h360v-60h60v60h100v-150zm200-60h280v-100H340z" /></svg>;
export default MaterialHomeRepairService;