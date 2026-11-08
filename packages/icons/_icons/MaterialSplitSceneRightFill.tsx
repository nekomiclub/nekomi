import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSplitSceneRightFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h210v640zm270 80v-800h60v80h270q24 0 42 18t18 42v520q0 24-18 42t-42 18H510v80z" /></svg>;
export default MaterialSplitSceneRightFill;