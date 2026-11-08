import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNestMultiRoom: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-120v-480l320-240 320 240v480zm60-60h310v-145H220zm370 0h150v-145H590zM220-385h150v-145H220zm210 0h310v-145H430zM247-590h466L480-763z" /></svg>;
export default MaterialNestMultiRoom;