import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSplitscreenVerticalAddFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M780-40v-80h-80v-60h80v-80h60v80h80v60h-80v80zm-600-80q-24.75 0-42.37-17.63Q120-155.25 120-180v-600q0-24.75 17.63-42.38Q155.25-840 180-840h187q24.75 0 42.38 17.62Q427-804.75 427-780v600q0 24.75-17.62 42.37Q391.75-120 367-120zm444 0q-35 0-63.5-14.5T532-180v-600q0-24.75 17.63-42.38Q567.25-840 592-840h188q24.75 0 42.38 17.62Q840-804.75 840-780v444q-10-2-20-3t-20-1q-75.22 0-127.61 52.5T620-160q0 10 1 20t3 20" /></svg>;
export default MaterialSplitscreenVerticalAddFill;