import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCarryOnBagInactiveFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M799-68 675-193q3 7 5.5 14.5T683-160q0 29-20.5 49.5T613-90t-49.5-20-20.5-49 20.5-50 49.5-21q12 0 18 2t14 5l-57-57q-43 8-69 42t-26 78v12.5q0 6.5 2 12.5H348v-384l-30-31v415h-46q-25 0-42.5-17T212-193v-411q0-11 3-21t11-16L88-779l43-43 711 711zM613-425 374-664h179v-156h-24q-25 0-42.5-17.5T469-880h144z" /></svg>;
export default MaterialCarryOnBagInactiveFill;