import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMailPerson: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-740v520-320 15zm372 580H140q-24 0-42-18.5T80-220v-520q0-23 18-41.5t42-18.5h680q23 0 41.5 18.5T880-740v200h-60v-140L480-463 140-680v460h372zm213.96-170Q695-330 673-352.04q-22-22.05-22-53Q651-436 673.04-458q22.05-22 53-22Q757-480 779-457.96q22 22.05 22 53Q801-374 778.96-352q-22.05 22-53 22M572-160v-27q0-21.38 13.5-39.19T619-253q25-11 51.5-16.5T726-275t55.5 5.5T833-253q20 9 33.5 26.33Q880-209.33 880-188v27zm-92-367 340-213H140z" /></svg>;
export default MaterialMailPerson;