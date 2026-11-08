import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCurtainsFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-120v-60h80v-660h640v660h80v60zm162-360q94 29 146.5 117.5T449-180h62q8-94 60-182.5T717-480q-94-29-146-117.5T511-780h-63q-8 94-60 182.5T242-480" /></svg>;
export default MaterialCurtainsFill;