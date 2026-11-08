import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialKeyOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M815-60 494-380q-29 69-88.5 104.5T280-240q-100 0-170-70T40-480q0-66 34-124.5T177-697L61-813l43-42 754 752zm32-495 73 73-146 146-84-84-33 33-92-93-75-75zM280-351q54 0 88.5-35t39.5-79l-22-22.5q-22-22.5-49-49t-49-49L266-608q-44 4-79.5 39T151-480t37.5 91.5T280-351" /></svg>;
export default MaterialKeyOffFill;