import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVacuumFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M73-113q-33-33-33-81t33-81 81-33 81 33 33 81-33 81-81 33-81-33m119.5-42.5Q208-171 208-194t-15.5-38.5T154-248t-38.5 15.5T100-194t15.5 38.5T154-140t38.5-15.5M288-80q20-24 30-53.5t10-60.5q0-72-51-123t-123-51q-19 0-37 3t-35 12v-238h125v-153q0-73 51.5-124.5T383-920q54 0 99.5 29t65.5 80l278 671h94v60H654v-60h110L489-786q-14-32-42.5-53T383-860q-48 0-82 34t-34 82v153h76q63 0 107 44t44 107v360z" /></svg>;
export default MaterialVacuumFill;