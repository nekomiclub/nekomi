import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialForestFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M543-80v-119h115v119zm-240 0v-149H0l189-274H94l266-377 266 377h-94l189 274H418v149zm455-149L590-473h93L499-737l101-143 266 377h-94l188 274z" /></svg>;
export default MaterialForestFill;