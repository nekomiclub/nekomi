import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSkilletCooktopFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M240-370q-51 0-85.5-34.5T120-490v-150h540q0-33 14-58.5t46.74-36.8L910-799l19 57-189 63q-8.89 3.05-14.44 11.07Q720-659.92 720-650v160q0 50-34.5 85T600-370zm150 250v-130H80v-60h310q24.75 0 42.38 17.62Q450-274.75 450-250v130zm120 0v-130q0-24.75 17.63-42.38Q545.25-310 570-310h310v60H570v130z" /></svg>;
export default MaterialSkilletCooktopFill;