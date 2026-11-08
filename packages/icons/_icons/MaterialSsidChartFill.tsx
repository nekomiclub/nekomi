import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSsidChartFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M481-120 233-360l-113 81v-74l119-85 245 238 172-137h184v60H676zm0-386L306-681 120-546v-74l192-140 175 175 353-255v74z" /></svg>;
export default MaterialSsidChartFill;