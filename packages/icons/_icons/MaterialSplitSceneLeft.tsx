import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSplitSceneLeft: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M570-160v-60h210v-520H570v-60h210q24 0 42 18t18 42v520q0 24-18 42t-42 18zM450-80v-80H180q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h270v-80h60v800zm330-660v520z" /></svg>;
export default MaterialSplitSceneLeft;