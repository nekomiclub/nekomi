import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialIcecreamFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M479-40 298-408q-69 12-123.5-30T120-555q0-45 27.5-88t80.5-58q16-99 88.5-159T480-920t163 60 89 159q53 15 80.5 58t27.5 88q0 75-56.5 117T664-408zm0-136 128-252-6-6q-28 15-60.5 22t-57.5 7q-32 0-65-7t-58-22l-6 5z" /></svg>;
export default MaterialIcecreamFill;