import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMailShield: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-220v-274 27-273zm340-307 340-213H140zM80-220v-520q0-23 18-41.5t42-18.5h680q23 0 41.5 18.5T880-740v303l-60-30v-213L480-463 140-680v460h414q2 15 5 30.5t8 29.5H143q-25 0-44-18.5T80-220M766-40q-71-18-112.5-78T612-252v-98l154-77 154 77v98q0 74-41.5 134T766-40m0-60q44-21 69-62t25-90v-61l-94-47z" /></svg>;
export default MaterialMailShield;