import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMailPersonFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M726-330q-31 0-53-22t-22-53 22-53 53-22 53 22 22 53-22 53-53 22M572-160v-27q0-21 13.5-39t33.5-27q25-11 51.5-16.5T726-275t55.5 5.5T833-253q20 9 33.5 26.5T880-188v27zm-111 0H140q-24 0-42-18.5T80-220v-520q0-23 18-41.5t42-18.5h680q23 0 41.5 18.5T880-740v200q-32-19-69.5-29T733-579q-25 0-49 4t-47 12l183-117v-60L480-527 140-740v60l340 217 38-24q-38 40-60.5 93T435-281q0 32 6.5 62.5T461-160" /></svg>;
export default MaterialMailPersonFill;