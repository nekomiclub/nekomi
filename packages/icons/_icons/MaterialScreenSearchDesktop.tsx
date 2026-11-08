import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialScreenSearchDesktop: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m623-361 32-32-88-88q11-17 18.5-35.36Q593-534.71 593-555q0-57-39-96t-96-39-96 39.08q-39 39.07-39 96Q323-498 362-459t96 39q22.09 0 41.54-7.5Q519-435 537.72-446zM458.04-470Q423-470 398-494.96q-25-24.95-25-60Q373-590 397.97-615T458-640q35 0 60 24.96 25 24.95 25 60Q543-520 518.04-495q-24.95 25-60 25M140-240q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h680q24 0 42 18t18 42v480q0 24-18 42t-42 18zm0-60h680v-480H140zm0 0v-480zM40-120v-60h880v60z" /></svg>;
export default MaterialScreenSearchDesktop;