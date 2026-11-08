import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAccountChildFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M637-849q73 31 127 85t85 127 31 157-31 157-85 127-127 85-157 31-157-31-127-85-85-127-31-157 31-157 85-127 127-85 157-31 157 31M394-686q0 38 24 62t62 24 62-24 24-62-24-62-62-24-62 24-24 62m-47 154.5Q280-503 280-450v159q0 48 70.5 81T502-183v-78q-34-1-70-9t-61-22q1-26 32.5-41.5T480-349t77 12 32 34v99q45-10 68-35.5t23-51.5v-159q0-53-67-81.5T480-560t-133 28.5M440-387q-16-16-16-40t16-40 40-16 40 16 16 40-16 40-40 16-40-16" /></svg>;
export default MaterialAccountChildFill;