import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCurrencyRubleFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M290-120v-130h-90v-60h90v-110h-90v-60h90v-360h260q87.82 0 148.91 61.13t61.09 149T698.91-481 550-420H350v110h170v60H350v130zm60-360h200q63 0 106.5-43.5T700-630t-43.5-106.5T550-780H350z" /></svg>;
export default MaterialCurrencyRubleFill;