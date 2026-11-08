import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFullStackedBarChartFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-160v-130h140v130zm0-160v-140h140v140zm0-170v-310h140v310zm250 330v-300h140v300zm0-330v-140h140v140zm0-170v-140h140v140zm250 500v-100h140v100zm0-130v-140h140v140zm0-170v-340h140v340z" /></svg>;
export default MaterialFullStackedBarChartFill;