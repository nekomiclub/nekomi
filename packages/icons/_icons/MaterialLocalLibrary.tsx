import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLocalLibrary: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-60q-78-69-170.5-106T120-203v-429q94 0 186.5 43T480-469q81-77 173.5-120T840-632v429q-97 0-189.5 37T480-60m0-77q71-51 146.5-81.5T780-257v-310q-68 11-143.5 54.5T480-392q-88-81-160-123t-140-52v310q78 8 153.5 38.5T480-137M373.5-656.5Q329-701 329-766t44.5-109.5T483-920t109.5 44.5T637-766t-44.5 109.5T483-612t-109.5-44.5m176-43Q577-727 577-766t-27.5-66.5T483-860t-66.5 27.5T389-766t27.5 66.5T483-672t66.5-27.5M480-392" /></svg>;
export default MaterialLocalLibrary;