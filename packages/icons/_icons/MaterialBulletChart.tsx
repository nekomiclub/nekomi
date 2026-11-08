import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBulletChart: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-202v-556h370v-82h60v82h370v556H510v82h-60v-82zm60-60h310v-105H140zm0-330h310v-106H140zm0 165h433v-105H140zm370 165h310v-436H510v106h123v225H510zM140-427v-105z" /></svg>;
export default MaterialBulletChart;