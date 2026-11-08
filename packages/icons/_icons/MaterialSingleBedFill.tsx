import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSingleBedFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M256-200h-30.3L206-280h-46v-214q0-25.9 17-43.95T220-556h26v-144q0-24.75 17.63-42.38Q281.25-760 306-760h347q24.75 0 42.38 17.62Q713-724.75 713-700v144h27q24.75 0 42.38 17.62Q800-520.75 800-496v216h-46l-19.78 80h-30.44L684-280H277zm254-356h143v-144H510zm-204 0h144v-144H306z" /></svg>;
export default MaterialSingleBedFill;