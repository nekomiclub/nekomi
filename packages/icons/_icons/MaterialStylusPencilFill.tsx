import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStylusPencilFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m160-120 21-57q8-22 27-35.5t42-13.5h460q23 0 42 13.5t27 35.5l21 57zm85-206 201-514h68l201 514z" /></svg>;
export default MaterialStylusPencilFill;