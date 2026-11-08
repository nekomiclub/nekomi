import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMonitoring: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-120v-76l60-60v136zm165 0v-236l60-60v296zm165 0v-296l60 61v235zm165 0v-235l60-60v295zm165 0v-396l60-60v456zM120-356v-85l280-278 160 160 280-281v85L560-474 400-634z" /></svg>;
export default MaterialMonitoring;