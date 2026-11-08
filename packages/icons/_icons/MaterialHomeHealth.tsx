import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHomeHealth: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M430-290h100v-100h100v-100H530v-100H430v100H330v100h100zM160-120v-480l320-240 320 240v480zm60-60h520v-394L480-763 220-574zm260-292" /></svg>;
export default MaterialHomeHealth;