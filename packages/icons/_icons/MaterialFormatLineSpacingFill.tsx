import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFormatLineSpacingFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M240-159 80-319l42-42 88 86v-408l-88 86-42-42 160-160 160 160-42 42-88-86v408l88-86 42 42zm240-41v-60h400v60zm0-250v-60h400v60zm0-250v-60h400v60z" /></svg>;
export default MaterialFormatLineSpacingFill;