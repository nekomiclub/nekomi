import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialThermostatCarbon: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M458.04-75.43Q447.07-79.87 438-88L88-438q-8.13-9.07-12.57-20.04Q71-469 71-480t4.43-22.34Q79.87-513.68 88-522l350-350q9.07-8.87 20.04-12.93Q469-889 480-889t22.34 4.07Q513.68-880.87 522-872l350 350q8.87 8.32 12.93 19.66Q889-491 889-480t-4.07 21.96Q880.87-447.07 872-438L522-88q-8.32 8.13-19.66 12.57Q491-71 480-71t-21.96-4.43M480-131l349-349-349-349-349 349zm0-349" /></svg>;
export default MaterialThermostatCarbon;