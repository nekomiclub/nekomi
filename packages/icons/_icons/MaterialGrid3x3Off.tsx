import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGrid3x3Off: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m712-333-60-60h148v60zm-85-85L418-627h149v-173h60v173h173v60H627zM393-653l-60-60v-87h60zM821-54 627-247v87h-60v-147l-26-26H393v173h-60v-173H160v-60h173v-148l-26-26H160v-60h86L70-803l43-43L863-96z" /></svg>;
export default MaterialGrid3x3Off;