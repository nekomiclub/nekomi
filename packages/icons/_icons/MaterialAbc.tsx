import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAbc: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M667-360q-15 0-24.5-9.5T633-394v-172q0-15 9.5-24.5T667-600h139q15 0 24.5 9.5T840-566v46h-48v-32H681v144h111v-32h48v46q0 15-9.5 24.5T806-360zm-287 0v-240h173q15 0 24.5 9.5T587-566v52q0 15-9.5 24.5T553-480q15 0 24.5 9.5T587-446v52q0 15-9.5 24.5T553-360zm48-144h111v-48H428zm0 96h111v-48H428zm-308 48v-206q0-15 9.5-24.5T154-600h139q15 0 24.5 9.5T327-566v206h-48v-77H168v77zm48-125h111v-67H168z" /></svg>;
export default MaterialAbc;