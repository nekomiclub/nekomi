import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLdaFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-80v-133L200-318v-202h250v-120h-70q-25 0-42.5-17.5T320-700v-120q0-25 17.5-42.5T380-880h200q25 0 42.5 17.5T640-820v120q0 25-17.5 42.5T580-640h-70v120h250v202L510-213v133zm0-198v-182H260v102zm60 0 190-80v-102H510z" /></svg>;
export default MaterialLdaFill;