import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSkullFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M420-340h120l-60-120zm-79.91-120q28.91 0 49.41-20.59t20.5-49.5-20.59-49.41-49.5-20.5-49.41 20.59-20.5 49.5 20.59 49.41 49.5 20.5m280 0q28.91 0 49.41-20.59t20.5-49.5-20.59-49.41-49.5-20.5-49.41 20.59-20.5 49.5 20.59 49.41 49.5 20.5M240-80v-170q-36-16-65.5-43T124-355.5 91.5-433 80-520q0-158 112-259t288-101 288 101 112 259q0 45-11.5 87T836-355.5 785.5-293 720-250v170H600v-120h-60v120H420v-120h-60v120z" /></svg>;
export default MaterialSkullFill;