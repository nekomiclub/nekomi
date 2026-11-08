import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDashboard2Edit: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-510v-290h430v290zM80-160v-290h390v290zm0-350v-290h310v290zm430-60h310v-170H510zM140-220h270v-170H140zm0-350h190v-170H140zM560-80v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q9 9 13 20t4 22-4.5 22.5-13.41 20.5L683-80zm300-263-37-37zM620-140h38l121-122-18-19-19-18-122 121zm141-141-19-18 37 37z" /></svg>;
export default MaterialDashboard2Edit;