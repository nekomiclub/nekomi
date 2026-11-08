import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMilitaryTech: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M280-880h400v333q0 23-11.32 42.15Q657.37-485.7 637-474l-141 82 26 97h134l-109 81 42 134-109-81-110 81 42-134-109-81h135.11L463-392l-140-82q-20.37-11.7-31.68-30.85Q280-524 280-547zm60 60v273q0 7 4.5 13t13.5 11l96 53v-350zm280 0H514v350l88-53q9-5 13.5-11t4.5-13zM514-645" /></svg>;
export default MaterialMilitaryTech;