import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCarFanLowMidLeft: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M538-40 419-242H145q-22 0-38.5-13.5T86-290L40-528q-9-43 19-77t72-34q32 0 57.5 20.5T223-566l62 223h111q16 0 30 8t22 22L590-70zM111-698q-29 0-50-21t-21-50 21-50 50-21 50 21 21 50-21 50-50 21m414 176L335-712l190-190 42 42-117 117h269v60H449l118 119zm206 306L540-406l43-43 118 117v-268h60v269l117-117 42 42z" /></svg>;
export default MaterialCarFanLowMidLeft;