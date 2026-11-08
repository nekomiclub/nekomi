import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialOutdoorGarden: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-120v-600l160-120 120 90 120-90 120 90 120-90 160 120v600zm60-60h187v-517l-87-68-100 75zm247 0h186v-517l-93-68-93 68zm246 0h187v-510l-100-75-87 68z" /></svg>;
export default MaterialOutdoorGarden;