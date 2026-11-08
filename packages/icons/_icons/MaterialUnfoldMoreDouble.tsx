import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialUnfoldMoreDouble: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480 0 312-169l42-42L481-85l127-127 42 42zm0-200L312-369l42-42 127 126 127-127 42 42zM354-548l-43-42 170-170 169 169-43 43-127-126zm0-200-43-42 170-170 169 169-43 43-127-126z" /></svg>;
export default MaterialUnfoldMoreDouble;