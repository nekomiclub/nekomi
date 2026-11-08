import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStackedBarChartFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-160v-470h140v470zm0-500v-140h140v140zm250 500v-350h140v350zm0-380v-140h140v140zm250 380v-230h140v230zm0-260v-140h140v140z" /></svg>;
export default MaterialStackedBarChartFill;