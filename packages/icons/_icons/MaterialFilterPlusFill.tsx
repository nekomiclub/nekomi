import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFilterPlusFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M367-160q-17 0-28.5-11.5T327-200v-240L88-745q-4-5-5.5-10.47Q81-760.95 81-766q0-14 9.35-24T115-800h584q15.3 0 24.65 10t9.35 23.57q0 5.43-1.5 10.93T726-745L487-440v240q0 17-11.5 28.5T447-160zm336 0v-118H585v-60h118v-117h60v117h117v60H763v118z" /></svg>;
export default MaterialFilterPlusFill;