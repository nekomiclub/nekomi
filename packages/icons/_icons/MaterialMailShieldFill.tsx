import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMailShieldFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M143-160q-26 0-44.5-17T80-220v-520q0-25 17.5-42.5T140-800h680q25 0 42.5 17.5T880-740v303l-114-57-214 107v135q0 24 4 47t11 45zM766-40q-71-18-112.5-78T612-252v-98l154-77 154 77v98q0 74-41.5 134T766-40m0-60q44-21 69-62t25-90v-61l-94-47zM480-463l340-217v-60L480-527 140-740v60z" /></svg>;
export default MaterialMailShieldFill;