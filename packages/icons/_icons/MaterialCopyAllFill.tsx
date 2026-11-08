import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCopyAllFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-240v-60h60v60zm0-160v-60h60v60zm0-160v-60h60v60zM280-80v-60h60v60zm60-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h400q24 0 42 18t18 42v520q0 24-18 42t-42 18zM440-80v-60h60v60zm-260 0q-24.75 0-42.37-17.63Q120-115.25 120-140h60zm420 0v-60h60q0 25-17.62 42.5Q624.75-80 600-80M120-720q0-24.75 17.63-42.38Q155.25-780 180-780v60z" /></svg>;
export default MaterialCopyAllFill;