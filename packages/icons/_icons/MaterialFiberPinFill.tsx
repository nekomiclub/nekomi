import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFiberPinFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M193-357h50v-89h100q23 0 36.5-14.38Q393-474.75 393-496v-57q0-21.25-13.5-35.63Q366-603 343-603H193zm252 0h50v-246h-50zm108 0h45v-178l119 178h49v-246h-45v171L598-603h-45zM243-496v-57h100v57zM140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18z" /></svg>;
export default MaterialFiberPinFill;