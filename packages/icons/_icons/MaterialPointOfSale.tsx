import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPointOfSale: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M260-630q-24.75 0-42.37-17.63Q200-665.25 200-690v-130q0-24.75 17.63-42.38Q235.25-880 260-880h440q24.75 0 42.38 17.62Q760-844.75 760-820v130q0 24.75-17.62 42.37Q724.75-630 700-630zm0-60h440v-130H260zM140-80q-24.75 0-42.37-17.63Q80-115.25 80-140v-70h800v70q0 24.75-17.62 42.37Q844.75-80 820-80zM80-240l145-324q8-16 22.6-26 14.61-10 31.4-10h402q16.79 0 31.4 10 14.6 10 22.6 26l145 324zm260-80h40q8 0 14-6t6-14-6-14-14-6h-40q-8 0-14 6t-6 14 6 14 14 6m0-80h40q8 0 14-6t6-14-6-14-14-6h-40q-8 0-14 6t-6 14 6 14 14 6m0-80h40q8 0 14-6t6-14-6-14-14-6h-40q-8 0-14 6t-6 14 6 14 14 6m120 160h40q8 0 14-6t6-14-6-14-14-6h-40q-8 0-14 6t-6 14 6 14 14 6m0-80h40q8 0 14-6t6-14-6-14-14-6h-40q-8 0-14 6t-6 14 6 14 14 6m0-80h40q8 0 14-6t6-14-6-14-14-6h-40q-8 0-14 6t-6 14 6 14 14 6m120 160h40q8 0 14-6t6-14-6-14-14-6h-40q-8 0-14 6t-6 14 6 14 14 6m0-80h40q8 0 14-6t6-14-6-14-14-6h-40q-8 0-14 6t-6 14 6 14 14 6m0-80h40q8 0 14-6t6-14-6-14-14-6h-40q-8 0-14 6t-6 14 6 14 14 6" /></svg>;
export default MaterialPointOfSale;