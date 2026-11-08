import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDashboard: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M510-570v-270h330v270zM120-450v-390h330v390zm390 330v-390h330v390zm-390 0v-270h330v270zm60-390h210v-270H180zm390 330h210v-270H570zm0-450h210v-150H570zM180-180h210v-150H180zm210-150" /></svg>;
export default MaterialDashboard;