import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEarlyOnFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M690-120q-46 0-78-32t-32-78q0-45 32-77.5t78-32.5 78 32.5 32 77.5q0 46-32 78t-78 32m-20-270v-70h40v70zm0 390v-70h40V0zm146-328-28-29 50-50 29 28zM541-53l-28-28 50-49 28 27zm309-157v-40h70v40zm-390 0v-40h70v40zM839-53l-50-51 28-28 50 50zM562-329l-49-49 28-29 49 50zM180-80q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v190H180v430h170v60z" /></svg>;
export default MaterialEarlyOnFill;