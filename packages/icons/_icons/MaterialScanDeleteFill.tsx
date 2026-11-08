import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialScanDeleteFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M551-634h189L551-820zm85 520-42-42 84-84-84-84 42-42 84 84 84-84 42 42-83 84 83 84-42 42-84-83zM220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h361l219 219v227q-20-8-40-12t-41-4q-87 0-148 61t-61 148q0 47 20 89t55 72z" /></svg>;
export default MaterialScanDeleteFill;