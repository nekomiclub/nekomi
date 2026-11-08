import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFlexWrap: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M40-80v-360h240v360zm320 0v-360h240v360zm320 0v-360h240v360zm-260-60h120v-240H420zM40-520v-360h240v360zm320 0v-360h240v360zm320 0v-360h240v360zm-580-60h120v-240H100zm640 0h120v-240H740z" /></svg>;
export default MaterialFlexWrap;