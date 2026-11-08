import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTuneFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M427-120v-225h60v83h353v60H487v82zm-307-82v-60h247v60zm187-166v-82H120v-60h187v-84h60v226zm120-82v-60h413v60zm166-165v-225h60v82h187v60H653v83zm-473-83v-60h413v60z" /></svg>;
export default MaterialTuneFill;