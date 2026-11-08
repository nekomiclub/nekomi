import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAttachFileAddFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M660-480v-236h60v236zM430-253q-26-12-43-36.47T370-346v-370h60zm43 173q-103.17 0-175.58-71.5Q225-223 225-326v-380q0-72.5 51.5-123.25T400-880t123.5 50.75T575-706v346h-60v-346q0-48-33.5-81t-81.71-33-81.5 33.06T285-706v380q0 78 54.97 132T473-140q37 0 69.5-13t57.5-36v74q-28 17-60 26t-67 9m187-40v-120H540v-60h120v-120h60v120h120v60H720v120z" /></svg>;
export default MaterialAttachFileAddFill;