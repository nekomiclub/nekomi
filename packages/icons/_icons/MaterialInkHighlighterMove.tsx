import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialInkHighlighterMove: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M617-820H280v-60h397zM457-660H160v-60h357zM297-500H40v-60h317zm307 93L489-522 267-300l115 115zm-72-158 115 115 213-213-115-115zm-64-21 200 200-234 234q-19 19-52.5 19T329-152l-11-11-43 43H120l120-120-4-4q-22-22-21.5-55.5T237-355zm0 0 237-237q17-17 43-17t43 17l112 112q17 17 16.5 45.5T902-620L668-386z" /></svg>;
export default MaterialInkHighlighterMove;