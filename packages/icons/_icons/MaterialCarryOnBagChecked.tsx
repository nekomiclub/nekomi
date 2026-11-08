import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCarryOnBagChecked: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m698-150 141-142-28-28-113 114-59-60-28 29zm-340-45v-409h-66v409zm130 60H292q-24 0-42-18t-18-42v-409q0-24 18-42t42-18h281v-156h-24q-24 0-42-18t-18-42h144v403q-14 5-30.5 14T573-443v-161H418v409h54q1 15 5 30.5t11 29.5m374.5-237.5Q919-316 919-235T862.5-97.5 725-41 587.5-97.5 531-235t56.5-137.5T725-429t137.5 56.5M358-195v-409zm60 0v-409z" /></svg>;
export default MaterialCarryOnBagChecked;