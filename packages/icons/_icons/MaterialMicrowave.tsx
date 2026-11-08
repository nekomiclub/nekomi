import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMicrowave: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-60h440v-520H140zm500 0h180v-520H640zm60-400h60v-60h-60zm30 170q13 0 21.5-9t8.5-21q0-13-8.5-21.5T730-510q-12 0-21 8.5t-9 21.5q0 12 9 21t21 9m0 170q13 0 21.5-9t8.5-21q0-13-8.5-21.5T730-340q-12 0-21 8.5t-9 21.5q0 12 9 21t21 9m-320-50q-22 0-38-8t-28-16q-8-5-16.5-10.5T310-370q-11 0-20.5 6.5T272-350l-43-42q12-12 33-25t48-13q22 0 38.5 8.5T377-405q11 7 18 11t15 4q11 0 20.5-6.5T448-410l43 42q-12 12-33 25t-48 13m0-200q-22 0-38-8t-28-16q-8-5-16.5-10.5T310-570q-11 0-20.5 6.5T272-550l-43-42q12-12 33-25t48-13q22 0 38.5 8.5T377-605q11 7 18 11t15 4q11 0 20.5-6.5T448-610l43 42q-12 12-33 25t-48 13m230 310v-520z" /></svg>;
export default MaterialMicrowave;