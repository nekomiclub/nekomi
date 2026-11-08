import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialListArrowFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M230-162 80-313l42-41 78 76v-483h60v483l77-76 42 41zm259-37v-60h391v60zm0-251v-60h391v60zm0-251v-60h391v60z" /></svg>;
export default MaterialListArrowFill;