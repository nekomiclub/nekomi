import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialThermostatArrowUpFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M167-174q-53-53-53-129 0-48 24-90.5t66-68.5v-286q0-38 27-65t65-27 65 27 27 65v286q42 26 66 68.5t24 90.5q0 76-53 129t-129 53-129-53m7-129h244q0-40-19-71.5T348-420l-20-9v-319q0-14-9-23t-23-9-23 9-9 23v319l-20 9q-32 14-51 46t-19 71m588 143v-526l-57 57-42-42 129-129 128 129-42 42-56-56v525z" /></svg>;
export default MaterialThermostatArrowUpFill;