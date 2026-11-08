import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSplitscreenVerticalAdd: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M780-780H620h4-32zm-248 0q0-24 18-42t42-18h188q24 0 42 18t18 42v440h-60v-440H592v660q-24 0-42-18t-18-42zM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h187q24 0 42 18t18 42v600q0 24-18 42t-42 18zm187-660H180v600h187zm0 0H180zM780-40v-80h-80v-60h80v-80h60v80h80v60h-80v80z" /></svg>;
export default MaterialSplitscreenVerticalAdd;