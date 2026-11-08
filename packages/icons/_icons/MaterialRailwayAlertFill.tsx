import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRailwayAlertFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M689-498q-79 0-135-56t-56-135 56-135 135-56q80 0 135.5 55.5T880-689t-56 135.5T689-498m-15-161h35v-143h-35zm18 85q9 0 15.5-6t6.5-16-6.5-16-15.5-6q-11 1-16.5 7t-5.5 15q0 10 6 16t16 6M439-288q16-16 16-39t-16-39-39-16-39 16-16 39 16 39 39 16 39-16M160-80v-40l60-40q-58 0-99-41t-41-99v-398q0-77 85.5-107.5T469-836q-21 32-33 69t-12 78v12.5q0 6.5 1 12.5H140v173h373q35 32 80 49.5t96 17.5q8 0 15.5-.5T720-426v126q0 58-41 99t-99 41l60 40v40z" /></svg>;
export default MaterialRailwayAlertFill;