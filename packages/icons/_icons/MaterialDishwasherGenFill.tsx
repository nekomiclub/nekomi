import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDishwasherGenFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h520q24 0 42 18t18 42v680q0 24-18 42t-42 18zm100.18-610q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5m141.32-8.68q8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5 12.82 0 21.32-8.68M480.1-250q58.9 0 100.4-40.08 41.5-40.09 41.5-97.89Q622-415 611.5-440T581-485L480-586l-97.2 97.2Q363-469 350-443t-12 55q1.87 57.81 43 97.91Q422.14-250 480.1-250M422-330.66q-24-23.65-24-57.44 0-16.9 8-32.9t21-28l53-52 57 56q11 11 18 25.5t7 31.4q0 33.79-23.88 57.44-23.88 23.66-58 23.66T422-330.66" /></svg>;
export default MaterialDishwasherGenFill;