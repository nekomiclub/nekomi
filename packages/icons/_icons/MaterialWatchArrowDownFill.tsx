import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWatchArrowDownFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-354 354-480l42-42 54 51v-139h60v139l54-51 42 42zM366-80l-47-171q-55-35-87-95t-32-134 32-134.5 87-94.5l47-171h228l47 171q55 34 87 94.5T760-480t-32 134-87 95L594-80zm270-244q64-64 64-156t-64-156-156-64-156 64-64 156 64 156 156 64 156-64" /></svg>;
export default MaterialWatchArrowDownFill;