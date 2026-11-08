import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNestFarsightEcoFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M479-309q71 0 120.5-49.5T649-479v-170H479q-71 0-120.5 49.5T309-479q0 26 8.5 50.5T340-382l-22 22q-9 9-9 21t9 21 21 9 21-9l22-22q22 14 46.5 22.5T479-309m38-166q9-9 9-21t-9-21-21-9-21 9l-74 74q-9 9-9 21.5t9 21.5 21 9 21-9zM480-80q-82 0-155-31.5t-127.5-86-86-127.5T80-480q0-83 31.5-156t86-127T325-848.5 480-880q83 0 156 31.5T763-763t85.5 127T880-480q0 82-31.5 155T763-197.5t-127 86T480-80" /></svg>;
export default MaterialNestFarsightEcoFill;