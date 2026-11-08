import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVilla: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-120v-522l515-198v360h85q0-24.75 17.68-42.38Q755.35-540 780.18-540q24.82 0 42.32 17.62Q840-504.75 840-480v360zm60-60h190v-300h205v-273L180-601zm250 0h145v-110h60v110h145v-240H430zm175-25" /></svg>;
export default MaterialVilla;