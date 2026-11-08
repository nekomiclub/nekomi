import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNestWakeOnApproachFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M794.5-495.5Q780-510 780-531v-259q0-21 14.5-35.5T830-840t35.5 14.5T880-790v259q0 21-14.5 35.5T830-481t-35.5-14.5m-501-29Q250-568 250-631t43.5-106.5T400-781t106.5 43.5T550-631t-43.5 106.5T400-481t-106.5-43.5M80-160v-94q0-35 18-63.5t50-42.5q60-27 123-43.5T400-420t128.5 17T651-360q32 14 50.5 42.5T720-254v94z" /></svg>;
export default MaterialNestWakeOnApproachFill;