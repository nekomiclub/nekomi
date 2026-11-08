import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAcUnitFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-80v-195L301-126l-43-42 192-192v-90h-90L172-262l-44-41 147-147H80v-60h195L125-660l43-43 192 193h90v-91L262-789l42-44 146 147v-194h60v194l150-150 42 43-192 192v91h91l189-189 43 42-147 147h194v60H686l148 149-41 43-192-192h-91v90l192 193-41 43-151-151v195z" /></svg>;
export default MaterialAcUnitFill;