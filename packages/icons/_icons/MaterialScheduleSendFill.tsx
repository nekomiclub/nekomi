import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialScheduleSendFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-160v-245l302-75-302-77v-243l664 280h-94q-97 0-168 64t-81 161zm436 24.5Q500-191 500-269q0-79 56-135t134-56 134 56 56 135q0 78-56 133.5T690-80t-134-55.5M760-166l29-31-82-82v-120h-41v139z" /></svg>;
export default MaterialScheduleSendFill;