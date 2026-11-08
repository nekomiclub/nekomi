import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPersonEditFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M560-120v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q9 9 13 20t4 22-4.5 22.5T902-340L683-120zm-400-40v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q38 0 75 6t75 17L500-268v108zm663-184 37-39-37-37-38 38zM373.5-524.5Q330-568 330-631t43.5-106.5T480-781t106.5 43.5T630-631t-43.5 106.5T480-481t-106.5-43.5" /></svg>;
export default MaterialPersonEditFill;