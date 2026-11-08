import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDoorbell: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M503-278.5q10-8.5 12-21.5h-70q2 13 12 21.5t23 8.5 23-8.5M325-320h310v-30h-40v-99q0-42.6-24-77.46T505-571v-14q0-10.83-7.12-17.92-7.11-7.08-18-7.08-10.88 0-17.88 7.08-7 7.09-7 17.92v14q-42 9.68-66 44.54T365-449v99h-40zM160-120v-480l320-240 320 240v480zm60-60h520v-394L480-763 220-574zm260-296" /></svg>;
export default MaterialDoorbell;