import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCheckbookFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-200v-560h800v149h-60L632-423H237v60h335L409-200zm157-341h231v-60H237zm293 421v-50l272-272 50 50-272 272zm348-298-50-50 39-39q5-5 10.5-5t10.5 5l27 27q5 5 5 12.5t-5 12.5z" /></svg>;
export default MaterialCheckbookFill;