import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialInkEraserOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M813-61 605-269 503-160H179l-81-84q-18-17-17.5-41.5T97-327l216-234L61-813l43-43 752 752zM688-358 395-651l160-174q16-17 40.5-17t41.5 17l205 215q17 17 18 42t-16 42z" /></svg>;
export default MaterialInkEraserOffFill;