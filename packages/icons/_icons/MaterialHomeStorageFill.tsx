import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHomeStorageFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m200-120-80-480h720l-80 480zm200-260h160q13 0 21.5-9t8.5-21q0-13-8.5-21.5T560-440H400q-12 0-21 8.5t-9 21.5q0 12 9 21t21 9M240-660q-12 0-21-9t-9-21q0-13 9-21.5t21-8.5h480q13 0 21.5 8.5T750-690q0 12-8.5 21t-21.5 9zm80-120q-12 0-21-9t-9-21q0-13 9-21.5t21-8.5h320q13 0 21.5 8.5T670-810q0 12-8.5 21t-21.5 9z" /></svg>;
export default MaterialHomeStorageFill;