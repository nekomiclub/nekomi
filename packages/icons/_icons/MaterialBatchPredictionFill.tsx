import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBatchPredictionFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M260-80q-24 0-42-18t-18-42v-433q0-24 18-42t42-18h440q24 0 42 18t18 42v433q0 24-18 42t-42 18zm190-112h60v-41h-60zm0-82h60q0-21 10.5-39t22.5-35q11-17 20.5-34.5T573-420q0-38-27.5-64T480-510t-65 26-27 64q0 20 9 37.5t20 34.5 22 35 11 39M242-706q0-21 15-36t36-15h375q21 0 35.5 15t14.5 36zm42-123q0-21 14.5-36t35.5-15h292q21 0 36 15t15 36z" /></svg>;
export default MaterialBatchPredictionFill;