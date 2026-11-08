import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialReplyAllFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M316-288 80-524l236-236 43 43-193 193 193 193zm503 88v-156q0-60-39-99t-99-39H376l163 163-43 43-236-236 236-236 43 43-163 163h305q85 0 141.5 56.5T879-356v156z" /></svg>;
export default MaterialReplyAllFill;