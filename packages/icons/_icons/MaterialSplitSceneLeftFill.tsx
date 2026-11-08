import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSplitSceneLeftFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M570-160v-640h210q24 0 42 18t18 42v520q0 24-18 42t-42 18zM450-80v-80H180q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h270v-80h60v800z" /></svg>;
export default MaterialSplitSceneLeftFill;