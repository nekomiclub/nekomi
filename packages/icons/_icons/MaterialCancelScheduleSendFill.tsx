import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCancelScheduleSendFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m621-177 69-68 68 68 23-23-69-69 71-71-23-23-70 70-70-70-23 23 70 70-70 70zm-501 17v-245l302-75-302-77v-243l664 280h-94q-97 0-168 64t-81 161zm436 24.5Q500-191 500-269q0-79 56-135t134-56 134 56 56 135q0 78-56 133.5T690-80t-134-55.5" /></svg>;
export default MaterialCancelScheduleSendFill;