import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLunchDiningFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-120q-25 0-42.5-17.5T80-180v-128h800v128q0 25-17.5 42.5T820-120zm279.5-284Q400-382 346-382t-71.5-22-58.5-22-61.5 22T80-382v-60q33 0 57.5-22t78.5-22 71.5 22 58.5 22 60.5-22 73.5-22 73.5 22 60.5 22 58.5-22 71.5-22 78.5 22 57.5 22v60q-54 0-74.5-22T744-426t-58.5 22-71.5 22-73.5-22-60.5-22-60.5 22M80-558v-40q0-109 105-175.5T480-840t295 66.5T880-598v40z" /></svg>;
export default MaterialLunchDiningFill;