import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDirectionsWalk: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m278-40 116-586-101 43v133h-61v-173l192-81q14-6 29.5-7.5T484-710q17 3 29.5 11t20.5 20l42 66q31 48 77.5 75.5T753-510v60q-70-2-123.5-30.5T533-568l-38 152 92 83v293h-60v-240l-108-98-79 338zm210.5-735.5Q467-797 467-827t21.5-51.5T540-900t51.5 21.5T613-827t-21.5 51.5T540-754t-51.5-21.5" /></svg>;
export default MaterialDirectionsWalk;