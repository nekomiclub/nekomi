import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBidLandscapeDisabledFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M852-15 747-120H180q-24 0-42-18t-18-42v-567L20-847l42-42L894-57zm-12-181L640-396l140-140v-85L598-439 196-840h584q24 0 42 18t18 42zm-660-94 185-185 177 177 13-13-219-220-156 156z" /></svg>;
export default MaterialBidLandscapeDisabledFill;