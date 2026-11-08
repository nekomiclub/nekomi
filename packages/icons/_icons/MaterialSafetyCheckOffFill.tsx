import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSafetyCheckOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m810-57 43-43L98-855l-43 43 105 105v183q0 153 88.5 278.5T480-81q54-14 100-42t90-72zM480-288q-79 0-136-57t-57-136q0-22 4.5-42t13.5-39l255 256q-19 9-39 13.5t-41 4.5m263-7q27-53 42-111.5T800-524v-238L480-881l-234 88 142 143q20-11 43.5-17.5T480-674q79 0 136 57t57 136q0 25-6.5 48.5T649-389z" /></svg>;
export default MaterialSafetyCheckOffFill;