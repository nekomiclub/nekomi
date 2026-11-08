import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTableChartView: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m289-87-42-42 269-270 140 140 216-215 42 42-258 258-140-140zm-149-33q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h600q24 0 42 18t18 42v198H140zm0-542h600v-138H140zm0 0v-138z" /></svg>;
export default MaterialTableChartView;