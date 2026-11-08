import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGroceryFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-160q-24 0-42-18t-18-42v-330q0-13 1.5-21t6.5-19l92-200h-22q-15 0-24.5-9.5T124-824v-22q0-15 9.5-24.5T158-880h261q15 0 24.5 9.5T453-846v22q0 15-9.5 24.5T419-790h-22l96 222q-69 35-105.5 108.5T351-311q0 35 9 78t29 73zm506 80q-100 0-167-67t-67-167 67-167 167-67 167 67 67 167-67 167-167 67m0-518q-36 0-60-24t-24-60 24-60 60-24zq0-36 24-60t60-24 60 24 24 60z" /></svg>;
export default MaterialGroceryFill;