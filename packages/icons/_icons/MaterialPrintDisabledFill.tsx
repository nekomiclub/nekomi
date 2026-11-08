import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPrintDisabledFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m813-61-95-95v36H242v-176H80v-246q0-45 30.5-75.5T186-648h40L61-813l43-43 752 752zM302-180h356v-36L502-372H302zm448-116L398-648h376q45 0 75.5 30.5T880-542v246zm-92-382H368L206-840h512v162zm81 185q12 0 21-9t9-21-9-21-21-9-21 9-9 21 9 21 21 9" /></svg>;
export default MaterialPrintDisabledFill;