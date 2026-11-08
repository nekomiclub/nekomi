import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSplitSceneDownFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-570v-210q0-24 18-42t42-18h520q24 0 42 18t18 42v210zm60 450q-24 0-42-18t-18-42v-270H80v-60h800v60h-80v270q0 24-18 42t-42 18z" /></svg>;
export default MaterialSplitSceneDownFill;