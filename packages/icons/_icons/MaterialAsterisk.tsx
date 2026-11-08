import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAsterisk: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-120v-288L247-205l-42-42 203-203H120v-60h289L205-714l42-42 203 203v-287h60v288l204-204 42 42-204 204h288v60H553l203 203-42 42-204-204v289z" /></svg>;
export default MaterialAsterisk;