import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRotate90DegreesCcw: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M524-80q-63 0-124-18.5T292-157l42-44q42 33 89 47t101 14q122 0 209-87t87-209-87-209-209-87h-42l84 84-44 44-158-158 158-158 44 44-84 84h42q146 0 251 105t105 251q0 73-28.5 137.5t-77 113-113 77T524-80M262-220 40-442l222-222 222 222zm0-82 136-136-136-136-136 136zm0-136" /></svg>;
export default MaterialRotate90DegreesCcw;