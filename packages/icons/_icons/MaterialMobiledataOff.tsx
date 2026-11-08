import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMobiledataOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M807-57 378-486v250l79-79 43 43-152 152-152-152 43-43 79 79v-309L57-806l42-42L849-99zM631-404l-60-60v-260l-79 79-43-43 152-152 152 152-43 43-79-79z" /></svg>;
export default MaterialMobiledataOff;