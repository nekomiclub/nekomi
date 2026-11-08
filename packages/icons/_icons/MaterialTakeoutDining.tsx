import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTakeoutDining: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M304-220h352l23-310H281zm-27-370h406l5-73-120-117H392L272-663zm-57 54L80-683l43-43 92 95-5-51 156-158h228l156 158-5 51 92-95 43 43-140 147zm28 376-28-376h520l-28 376zm232-370" /></svg>;
export default MaterialTakeoutDining;