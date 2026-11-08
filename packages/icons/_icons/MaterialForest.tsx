import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialForest: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M303-80v-149H0l189-274H94l266-377 120 170 120-170 266 377h-94l188 274H658v149H543v-149H418v149zm377-209h165L656-563h89L600-769l-80 115 106 151h-94zm-564 0h489L416-563h89L360-769 215-563h90zm0 0h189-90 290-89 189zm564 0H532h94-106 225-89 189zm-137 60h115zm178 0" /></svg>;
export default MaterialForest;