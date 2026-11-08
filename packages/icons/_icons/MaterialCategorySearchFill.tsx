import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCategorySearchFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-145v-304h304v304zm141-421 220-354 220 354zM870-51 769-152q-22 15-48 23.5t-55 8.5q-74 0-124-50t-50-124 50-124 124-50 124 50 50 124q0 28-7.5 52.5T811-196L913-94zM747-213q33-33 33-81t-33-81-81-33-81 33-33 81 33 81 81 33 81-33" /></svg>;
export default MaterialCategorySearchFill;