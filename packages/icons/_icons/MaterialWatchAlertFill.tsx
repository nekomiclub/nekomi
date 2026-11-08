import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWatchAlertFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m366-80-47-171q-55-35-87-95t-32-134 32-134.5 87-94.5l47-171h228l47 171q55 34 87 94.5T760-480t-32 134-87 95L594-80zm270-244q64-64 64-156t-64-156-156-64-156 64-64 156 64 156 156 64 156-64m-132.5-25.5Q513-359 513-373t-9.5-23.5T480-406t-23.5 9.5T447-373t9.5 23.5T480-340t23.5-9.5M453-456h60v-170h-60z" /></svg>;
export default MaterialWatchAlertFill;