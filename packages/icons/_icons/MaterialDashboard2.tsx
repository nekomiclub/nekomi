import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDashboard2: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M570-160v-290h310v290zM450-510v-290h430v290zM80-160v-290h430v290zm0-350v-290h310v290zm430-60h310v-170H510zM140-220h310v-170H140zm490 0h190v-170H630zM140-570h190v-170H140zm190 0" /></svg>;
export default MaterialDashboard2;