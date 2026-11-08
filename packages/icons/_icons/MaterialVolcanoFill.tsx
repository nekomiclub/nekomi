import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVolcanoFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m80-80 160-360h120l80-200h280L880-80zm463-700v-140h60v140zm181 76-42-42 99-99 43 42zm-302 0-99-99 42-43 99 100z" /></svg>;
export default MaterialVolcanoFill;