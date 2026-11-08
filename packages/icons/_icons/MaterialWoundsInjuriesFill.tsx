import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWoundsInjuriesFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m128-86-42-42 93-93-95-26 16-58 94 26-25-95 58-16 25 95 170-169-95-26 16-58 95 26-26-95 58-16 26 95 169-170-95-25 16-58 95 25-26-94 58-16 26 95 93-93 42 42-93 93 95 26-16 58-94-26 25 95-58 16-25-95-170 169 95 26-16 58-95-26 26 95-58 16-26-95-169 170 95 25-16 58-95-25 26 94-58 16-26-95z" /></svg>;
export default MaterialWoundsInjuriesFill;