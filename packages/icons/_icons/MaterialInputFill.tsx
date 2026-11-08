import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialInputFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-160q-24 0-42-18t-18-42v-169h60v169h680v-520H140v171H80v-171q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18zm319-143-43-43 103-103H80v-60h439L416-612l43-43 176 176z" /></svg>;
export default MaterialInputFill;