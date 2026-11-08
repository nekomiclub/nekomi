import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAirportShuttleFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M152-232.08q-32-32.09-32-77.92H40v-380q0-28.88 20.56-49.44Q81.13-760 110-760h576l234 234v216h-80q0 45.83-32.12 77.92-32.12 32.08-78 32.08T652-232.08q-32-32.09-32-77.92H340q0 46-32.12 78t-78 32T152-232.08M600-560h194L654-700h-54zm-250 0h190v-140H350zm-250 0h190v-140H100zm172.5 292.64q17.5-17.36 17.5-42.5t-17.36-42.64-42.5-17.5-42.64 17.36-17.5 42.5 17.36 42.64 42.5 17.5 42.64-17.36m500 0q17.5-17.36 17.5-42.5t-17.36-42.64-42.5-17.5-42.64 17.36-17.5 42.5 17.36 42.64 42.5 17.5 42.64-17.36" /></svg>;
export default MaterialAirportShuttleFill;