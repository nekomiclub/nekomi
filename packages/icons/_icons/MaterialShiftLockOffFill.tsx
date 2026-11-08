import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialShiftLockOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-80v-60h680v60zm180-140v-210H120l182-228 338 338v100zm296-210L340-705l140-175 360 450zM833-41 26-848l43-43L876-84z" /></svg>;
export default MaterialShiftLockOffFill;