import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFilterAlt: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M440-160q-17 0-28.5-11.5T400-200v-240L161-745q-14-17-4-36t31-19h584q21 0 31 19t-4 36L560-440v240q0 17-11.5 28.5T520-160zm40-276 240-304H240zm0 0" /></svg>;
export default MaterialFilterAlt;