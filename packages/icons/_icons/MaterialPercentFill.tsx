import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPercentFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M289.9-540q-53.9 0-91.9-38.1t-38-92 38.1-91.9 92-38 91.9 38.1 38 92-38.1 91.9-92 38m-.02-60q29.12 0 49.62-20.38t20.5-49.5-20.38-49.62-49.5-20.5-49.62 20.38-20.5 49.5 20.38 49.62 49.5 20.5M669.9-160q-53.9 0-91.9-38.1t-38-92 38.1-91.9 92-38 91.9 38.1 38 92-38.1 91.9-92 38m49.6-80.38q20.5-20.38 20.5-49.5t-20.38-49.62-49.5-20.5-49.62 20.38-20.5 49.5 20.38 49.62 49.5 20.5 49.62-20.38M202-160l-42-42 598-598 42 42z" /></svg>;
export default MaterialPercentFill;