import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialShiftLockOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-80v-60h680v60zm180-140v-210H120l182-228 43 43-98 125h133v210h200v-100l60 60v100zm295-210-60-60h158L480-786l-97 124-43-43 140-175 360 450zM833-41 26-848l43-43L876-84zM427-447" /></svg>;
export default MaterialShiftLockOff;