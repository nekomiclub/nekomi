import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialReceiptFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-81v-798l60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60v798l-60-60-60 60-60-60-60 60-60-60-60 60-60-59.85L360-81l-60-59.85L240-81l-60-59.85zm117-215h490v-60H237zm0-154h490v-60H237zm0-155h490v-60H237z" /></svg>;
export default MaterialReceiptFill;