import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialUTurnRightFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M252-120v-486q0-97 68.5-165.5T486-840t165.5 68.5T720-606v214l90-90 42 42-162 162-162-162 42-42 90 90v-214q0-72-51-123t-123-51-123 51-51 123v486z" /></svg>;
export default MaterialUTurnRightFill;