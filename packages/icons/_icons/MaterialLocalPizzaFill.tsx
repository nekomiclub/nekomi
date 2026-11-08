import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLocalPizzaFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-80 80-685q86-72 188-113.5T480-840t212 41.5T880-685zm-71-501.06q16-16.06 16-39T408.94-659t-39-16T331-658.94t-16 39T331.06-581t39 16T409-581.06m110 215q16-16.06 16-39T518.94-444t-39-16T441-443.94t-16 39T441.06-366t39 16T519-366.06" /></svg>;
export default MaterialLocalPizzaFill;