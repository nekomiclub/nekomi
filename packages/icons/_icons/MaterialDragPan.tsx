import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDragPan: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-80 317-243l44-44 89 89v-252H198l84 84-44 44L80-480l159-159 44 44-85 85h252v-252l-84 84-44-44 158-158 158 158-44 44-84-84v252h252l-84-84 44-44 158 158-158 158-44-44 84-84H510v252l89-89 44 44z" /></svg>;
export default MaterialDragPan;