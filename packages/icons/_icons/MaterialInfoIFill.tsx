import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialInfoIFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M430.5-720.59q-20.5-20.59-20.5-49.5t20.59-49.41 49.5-20.5 49.41 20.59 20.5 49.5-20.59 49.41-49.5 20.5-49.41-20.59M430-120v-480h100v480z" /></svg>;
export default MaterialInfoIFill;