import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGridOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m833-41-79-79H640v-114l-60-60v174H380v-200h174l-60-60H380v-114l-60-60v174H120v-200h174l-60-60H120v-114l-94-94 43-43L876-84zm-653-79q-24.75 0-42.37-17.63Q120-155.25 120-180v-140h200v200zm660-86L726-320h114zM666-380l-26-26v-174h200v200zm-86-86L466-580h114zM406-640l-26-26v-174h200v200zm234 0v-200h140q24.75 0 42.38 17.62Q840-804.75 840-780v140zm-320-86L206-840h114z" /></svg>;
export default MaterialGridOffFill;