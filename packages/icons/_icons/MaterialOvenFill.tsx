import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialOvenFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-651v-129q0-24 18-42t42-18h600q24 0 42 18t18 42v129zm60 531q-24 0-42-18t-18-42v-441h720v441q0 24-18 42t-42 18zm148-600q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9m60 249h185v-60H388zm113-249q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9m173 0q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9" /></svg>;
export default MaterialOvenFill;