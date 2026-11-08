import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTempleHinduFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m320-680 49-164v-76h60v80h101v-80h60v71l50 169zM80-80v-440h60v80h107l6-20h454l6 20h107v-80h60v440H530v-210H430v210zm191-440 31-100h356l31 100z" /></svg>;
export default MaterialTempleHinduFill;