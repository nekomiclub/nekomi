import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGridView: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-510v-330h330v330zm0 390v-330h330v330zm390-390v-330h330v330zm0 390v-330h330v330zM180-570h210v-210H180zm390 0h210v-210H570zm0 390h210v-210H570zm-390 0h210v-210H180zm210-390" /></svg>;
export default MaterialGridView;