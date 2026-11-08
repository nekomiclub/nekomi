import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVerticalSplitFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M113-367v-60h329v60zm0 167v-60h329v60zm0-333v-60h329v60zm0-167v-60h329v60zm496 500q-24.75 0-42.37-17.63Q549-235.25 549-260v-440q0-24.75 17.63-42.38Q584.25-760 609-760h179q24.75 0 42.38 17.62Q848-724.75 848-700v440q0 24.75-17.62 42.37Q812.75-200 788-200z" /></svg>;
export default MaterialVerticalSplitFill;