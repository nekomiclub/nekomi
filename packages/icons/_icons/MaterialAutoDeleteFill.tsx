import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAutoDeleteFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M347-840h248v30h189v60h-43v191q-16-5-36-8t-37-3q-20 0-43 4t-42 10v-109h-60v137q-30 19-58.5 50.5T420-414v-251h-60v399h32q3 36 19.5 76t36.5 70H261q-24 0-42-18t-18-42v-570h-43v-60h189zm321 338q87.98 0 149.99 61.72Q880-378.57 880-291q0 87.98-62.01 149.99Q755.97-79 667.99-79 580-79 518.5-141.01q-61.5-62.02-61.5-150 0-87.99 61.72-149.49Q580.43-502 668-502m-21 92v128l86 86 28-28-74-74v-112z" /></svg>;
export default MaterialAutoDeleteFill;