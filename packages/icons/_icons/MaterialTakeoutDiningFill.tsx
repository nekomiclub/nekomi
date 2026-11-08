import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTakeoutDiningFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M192-565 80-683l43-43 92 95-5-51 156-158h228l156 158-5 51 92-95 43 43-112 118zm56 405-28-376h520l-28 376z" /></svg>;
export default MaterialTakeoutDiningFill;