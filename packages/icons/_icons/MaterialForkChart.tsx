import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialForkChart: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-160v-310q-26-7-43-28t-17-50v-192q0-8 6-14t14-6 14 6 6 14v140h30v-140q0-8 6-14t14-6 14 6 6 14v140h30v-140q0-8 6-14t14-6 14 6 6 14v192q0 29-17 50t-43 28v310zm480 1q-134 0-227.5-93.5T279-480q0-133 93.5-226.5T600-800q133 0 226.5 93.5T920-480q0 134-93.5 227.5T600-159m203-482L642-480l161 162q26-34 41.5-75t15.5-87-15.5-87-41.5-74m-173-97v186l131-131q-28-22-61-36t-70-19m-30 519q46 0 87-15.5t74-41.5L570-467v-271q-98 11-164.5 84.5T339-480q0 109 76 185t185 76" /></svg>;
export default MaterialForkChart;