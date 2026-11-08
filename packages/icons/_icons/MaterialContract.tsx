import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialContract: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M225-80q-43.75 0-74.37-30.63Q120-141.25 120-185v-135h120v-560h600v695q0 43.75-30.62 74.37Q778.75-80 735-80zm509.91-60Q754-140 767-152.94T780-185v-635H300v500h390v135q0 19.12 12.91 32.06t32 12.94M360-640v-60h360v60zm0 120v-60h360v60zM224-140h406v-120H180v75q0 19.12 13 32.06T224-140m0 0h-44 450z" /></svg>;
export default MaterialContract;