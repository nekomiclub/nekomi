import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialForkSpoonFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M243-80v-373q-57-15-90-55.5T120-603v-277h60v247h63v-247h60v247h64v-247h60v277q0 55-33 95t-91 55v373zm413 0v-389q-57-19-90.5-73.5T532-672q0-87 45-147.5T686-880t109 60.5T840-672q0 75-33.5 129.5T716-468v388z" /></svg>;
export default MaterialForkSpoonFill;