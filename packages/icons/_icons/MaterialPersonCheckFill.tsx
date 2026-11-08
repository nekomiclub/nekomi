import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPersonCheckFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M702-494 575-622l42-42 85 85 170-170 42 43zm-450-29q-42-42-42-108t42-108 108-42 108 42 42 108-42 108-108 42-108-42M40-160v-94q0-35 17.5-63.5T108-360q75-33 133.5-46.5T360-420t118 13.5T611-360q33 15 51 43t18 63v94z" /></svg>;
export default MaterialPersonCheckFill;