import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHevcFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-360v-240h48v87h55v-87h48v240h-48v-105h-55v105zm204 0v-240h128v48h-80v39h80v48h-80v57h80v48zm207 0-45-240h49l36 191 35-191h49l-45 240zm192 0q-15 0-24.5-9.5T689-394v-172q0-15 9.5-24.5T723-600h83q15 0 24.5 9.5T840-566v41h-48v-27h-55v144h55v-20h48v34q0 15-9.5 24.5T806-360z" /></svg>;
export default MaterialHevcFill;