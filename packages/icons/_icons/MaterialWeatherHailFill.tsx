import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWeatherHailFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m500-42-53-53 53-53 53 53zm-138-60-35-35 111-111 35 35zm258-60-53-53 53-53 53 53zm-360 0-53-53 53-53 53 53zm30-178q-87 0-148.5-61.5T80-550q0-79 56.5-141T277-759q32-56 84.5-88.5T480-880q91 0 152.5 57.5T708-680q79 4 125.5 53.5T880-510q0 70-49.5 120T710-340z" /></svg>;
export default MaterialWeatherHailFill;