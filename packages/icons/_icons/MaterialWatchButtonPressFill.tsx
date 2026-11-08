import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWatchButtonPressFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M780-480v-360h60v360zM286-80l-47-171q-55-35-87-95t-32-134 32-134.5 87-94.5l47-171h228l47 171q55 34 87 94.5T680-480t-32 134-87 95L514-80zm270-244q64-64 64-156t-64-156-156-64-156 64-64 156 64 156 156 64 156-64" /></svg>;
export default MaterialWatchButtonPressFill;