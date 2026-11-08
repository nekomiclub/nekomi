import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDoorSensorFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M340-120q-24.75 0-42.37-17.63Q280-155.25 280-180v-120h200q24.75 0 42.38-17.68Q540-335.35 540-360.18q0-24.82-17.62-42.32Q504.75-420 480-420H280v-360q0-24.75 17.63-42.38Q315.25-840 340-840h280q24.75 0 42.38 17.62Q680-804.75 680-780v600q0 24.75-17.62 42.37Q644.75-120 620-120zM190-330q-12.75 0-21.37-8.68-8.63-8.67-8.63-21.5 0-12.82 8.63-21.32 8.62-8.5 21.37-8.5h290q12.75 0 21.38 8.68 8.62 8.67 8.62 21.5 0 12.82-8.62 21.32-8.63 8.5-21.38 8.5zm311.5-248.68q8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5 12.82 0 21.32-8.68m287-39.95Q780-627.25 780-640v-160q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v160q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63-12.82 0-21.32-8.63" /></svg>;
export default MaterialDoorSensorFill;