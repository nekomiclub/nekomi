import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLightFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M373.5-163.5Q330-207 330-270H180q-24 0-42-18t-18-42q0-152 93.5-258T450-705v-135h60v135q143 11 236.5 117T840-330q0 24-18 42t-42 18H630q0 63-43.5 106.5T480-120t-106.5-43.5M180-330h600q0-132-87.5-223.5T480-645t-212.5 91.5T180-330" /></svg>;
export default MaterialLightFill;