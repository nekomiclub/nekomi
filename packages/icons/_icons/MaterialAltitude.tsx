import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAltitude: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M730-490v-181l-74 73-42-42 146-146 146 146-42 43-74-74v181zM40-80l240-320 195 260h325L560-459 435-293l-38-50 163-217L920-80zm395-60" /></svg>;
export default MaterialAltitude;