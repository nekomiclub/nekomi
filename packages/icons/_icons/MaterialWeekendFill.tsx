import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWeekendFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M144-160q-44 0-74-31.5T40-268v-240q0-31 20.5-53.5T111-584t50.5 22.5T182-508v179h596v-179q0-31 20.5-53.5T849-584t50.5 22.5T920-508v240q0 45-29.5 76.5T817-160zm98-229v-119q0-43-25-78t-65-53v-52q0-45 30-77t74-32h449q44 0 73.5 32t29.5 77v52q-41 16-65.5 51.5T718-508v119z" /></svg>;
export default MaterialWeekendFill;