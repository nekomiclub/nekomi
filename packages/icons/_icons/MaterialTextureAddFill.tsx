import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTextureAddFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M161-120q-18-8-26-17.5T120-165l678-675q15 5 26.5 16.5T840-796zm-41-278v-86l356-356h86zm0-320v-62q0-24 18-42t42-18h62zm720 156v86l-23 23q-17-7-34.5-10.5T747-469zM398-120l102-102q2 18 6 35t11 34l-33 33zm302-90H580v-60h120v-120h60v120h120v60H760v120h-60z" /></svg>;
export default MaterialTextureAddFill;