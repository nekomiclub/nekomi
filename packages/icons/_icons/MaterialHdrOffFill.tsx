import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHdrOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M818-57 70-805l43-43 748 748zm-31-303-31-81h-72v79l-48-48v-190h155q23 0 36 13t13 36v61q0 17-11 29t-28 14l35 87zM684-489h108v-63H684zm-102 25L446-600h87q23 0 36 13t13 36zM120-360v-240h48v89h98v-89h48v240h-48v-103h-98v103zm258-168 48 48v72h72l47 47q-3 .5-6 .75t-6 .25H378z" /></svg>;
export default MaterialHdrOffFill;