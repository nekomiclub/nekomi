import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNoDrinks: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M240-120v-60h210v-244L61-813l43-43 752 752-43 43-303-303v184h210v60zm324-362-42-42 102-111H411l-60-60h328l83-81H270l-64-64h634v60zm-98-98" /></svg>;
export default MaterialNoDrinks;