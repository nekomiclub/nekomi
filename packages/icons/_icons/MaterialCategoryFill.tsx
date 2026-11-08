import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCategoryFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m261-526 220-354 220 354zM705.65-80Q633-80 582.5-130.65q-50.5-50.64-50.5-123Q532-326 582.65-377q50.64-51 123-51Q778-428 829-377.15q51 50.86 51 123.5 0 72.65-50.85 123.15Q778.29-80 705.65-80M120-105v-304h304v304z" /></svg>;
export default MaterialCategoryFill;