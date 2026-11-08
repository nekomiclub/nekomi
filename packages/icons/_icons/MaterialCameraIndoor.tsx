import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCameraIndoor: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M350-274h178q14.45 0 24.22-9.77Q562-293.55 562-308v-54l82 43v-153l-82 43v-54q0-14.45-9.78-24.23Q542.45-517 528-517H350q-14.02 0-23.51 9.77Q317-497.45 317-483v175q0 14.45 9.49 24.23Q335.98-274 350-274M160-120v-480l320-240 320 240v480zm60-60h520v-394L480-763 220-574zm260-292" /></svg>;
export default MaterialCameraIndoor;