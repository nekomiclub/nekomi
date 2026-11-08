import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialForkLeftFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M528-120v-170q-19-63-66.5-97T357-421q-23 0-45 3t-38 8l90 90-42 42-162-162 162-162 42 42-90 90q19-5 41-8t38-3q62 0 103.5 21t71.5 54v-320l-90 90-42-42 162-162 162 162-42 42-90-90v606z" /></svg>;
export default MaterialForkLeftFill;