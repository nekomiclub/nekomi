import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStylusPencil: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m160-120 21-57q8-22 27-35.5t42-13.5h460q23 0 42 13.5t27 35.5l21 57zm85-206 201-514h68l201 514zm87-60h296L480-760zm0 0h296z" /></svg>;
export default MaterialStylusPencil;