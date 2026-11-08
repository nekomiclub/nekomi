import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHolidayVillage: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-160v-400l240-240 240 240v400zm60-60h150v-120h60v120h150v-315L320-715 140-535zm150-230v-60h60v60zm370 290v-433L453-800h93l174 174v466zm160 0v-499L679-800h93l108 108v532zm-680-60h360z" /></svg>;
export default MaterialHolidayVillage;