import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAddBusiness: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M726-40v-121H606v-60h120v-120h60v120h120v60H786v121zM104-161v-257H54v-60l44-202h602l45 207v55h-49v167h-60v-167H420v257zm60-60h196v-197H164zm-50-257h572zM98-740v-60h603v60zm16 262h572l-31-142H145z" /></svg>;
export default MaterialAddBusiness;