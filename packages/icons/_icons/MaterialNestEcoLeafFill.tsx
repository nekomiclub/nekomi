import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNestEcoLeafFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M173-177q-9-9-9-20.5t9-20.5l61-62q-35-42-54.5-93.5T160-484q0-134 93-227t227-93h320v320q0 134-93 227t-227 93q-59 0-110.5-19.5T276-238l-62 61q-9 9-20.5 9t-20.5-9m158-158q9 9 21 9t21-9l161-161q9-9 9-21t-9-21q-8-8-20.5-8t-20.5 8L331-376q-8 8-8 20.5t8 20.5" /></svg>;
export default MaterialNestEcoLeafFill;