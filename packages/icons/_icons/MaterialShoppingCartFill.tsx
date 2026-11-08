import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialShoppingCartFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M236-102.21q-21-21.21-21-51T236.21-204t51-21T338-203.79t21 51T337.79-102t-51 21T236-102.21m400 0q-21-21.21-21-51T636.21-204t51-21T738-203.79t21 51T737.79-102t-51 21T636-102.21M205-801h589.07q22.97 0 34.95 21t-.02 42L694-495q-11 19-28.56 30.5T627-453H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117z" /></svg>;
export default MaterialShoppingCartFill;