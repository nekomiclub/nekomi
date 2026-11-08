import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialContractEditFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M360-640v-60h360v60zm0 120v-60h360v60zM560-80v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q9 9 13 20t4 22-4.5 22.5-13.41 20.5L683-80zm263-224 37-39-37-37-38 38zM225-80q-43.75 0-74.37-30.63Q120-141.25 120-185v-135h120v-560h600v381q-15-2-30.37-.03-15.38 1.97-29.63 7.03v-328H300v500h292l-92 92v148z" /></svg>;
export default MaterialContractEditFill;