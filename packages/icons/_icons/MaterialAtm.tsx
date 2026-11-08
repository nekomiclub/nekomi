import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAtm: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M409-360v-192h-80v-48h208v48h-80v192zm-329 0v-206q0-15 9.5-24.5T114-600h139q15 0 24.5 9.5T287-566v206h-48v-77H128v77zm48-125h111v-67H128zm458 125v-206q0-15 9.5-24.5T620-600h226q15 0 24.5 9.5T880-566v206h-48v-192h-75v150h-48v-150h-75v192z" /></svg>;
export default MaterialAtm;