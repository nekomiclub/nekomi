import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWidgets: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M679-466 466-679l213-213 213 213zm-559-72v-301h301v301zm418 418v-301h301v301zm-418 0v-301h301v301zm60-478h181v-181H180zm502 51 129-129-129-129-129 129zm-84 367h181v-181H598zm-418 0h181v-181H180zm418-181" /></svg>;
export default MaterialWidgets;