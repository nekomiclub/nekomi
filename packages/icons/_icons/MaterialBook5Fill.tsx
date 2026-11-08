import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBook5Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M270-80q-45 0-77.5-29.5T160-183v-564q0-37 22-65.5t58-36.5l380-79v620l-360 77q-17 4-28.5 17.5T220-183q0 19 15 31t35 12h470v-660h60v720zm10-215 60-13v-501l-60 13z" /></svg>;
export default MaterialBook5Fill;