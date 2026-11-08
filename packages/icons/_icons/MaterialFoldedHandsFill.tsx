import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFoldedHandsFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M640-320v-124l-68-128q-34 11-53 41t-19 66v264l76 121h304l-40-495-278-324q-35 35-43 82t15 90l146 271v136zm-360 0v-136l146-271q23-42 14.5-89.5T398-899L120-575 80-80h304l76-121v-264q0-36-19-66t-53-41l-68 128v124z" /></svg>;
export default MaterialFoldedHandsFill;