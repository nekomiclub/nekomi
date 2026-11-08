import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialKingBed: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M176-200h-30.3L126-280H80v-214q0-25.9 17-43.95T140-556h26v-144q0-24.75 17.63-42.38Q201.25-760 226-760h507q24.75 0 42.38 17.62Q793-724.75 793-700v144h27q24.75 0 42.38 17.62Q880-520.75 880-496v216h-46l-19.78 80h-30.44L764-280H197zm334-356h223v-144H510zm-284 0h224v-144H226zm-86 216h680v-156H140zm680 0H140z" /></svg>;
export default MaterialKingBed;