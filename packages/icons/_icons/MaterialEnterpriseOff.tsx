import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEnterpriseOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m845-22-98.27-98H140q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h93l60 60H140v480h548L59-808l43-43L888-64zm35-161-60-60v-417H402l-82-83v-77q0-23 18.5-41.5T380-880h200q24 0 42 18.5t18 41.5v100h180q23 0 41.5 18t18.5 42zM380-720h200v-100H380zm68 300" /></svg>;
export default MaterialEnterpriseOff;