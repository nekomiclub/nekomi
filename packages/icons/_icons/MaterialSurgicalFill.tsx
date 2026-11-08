import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSurgicalFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M496-346 346-496l339-339q9-9 21.5-9t21.5 9l107 107q9 9 9 21.5t-9 21.5zm-56 226 61-60h379v60zm-237 0q-46 0-88.5-18T40-188l265-264 104 104q14 14 22 32t8 38-8 38.5-22 32.5l-19 19q-32 32-74.5 50T227-120z" /></svg>;
export default MaterialSurgicalFill;