import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBoltBoostFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m536-120 42-289H338l316-431h22l-42 288h241L559-120zM120-244v-60h335l-9 60zM80-450v-60h199l-40 60zm80-207v-60h271l-44 60z" /></svg>;
export default MaterialBoltBoostFill;