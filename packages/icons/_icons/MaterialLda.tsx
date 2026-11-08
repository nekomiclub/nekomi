import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLda: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-80v-133L200-318v-202h250v-120h-70q-24.75 0-42.37-17.63Q320-675.25 320-700v-120q0-24.75 17.63-42.38Q355.25-880 380-880h200q24.75 0 42.38 17.62Q640-844.75 640-820v120q0 24.75-17.62 42.37Q604.75-640 580-640h-70v120h250v202L510-213v133zm-70-620h200v-120H380zm70 422v-182H260v102zm60 0 190-80v-102H510zM380-700v-120z" /></svg>;
export default MaterialLda;