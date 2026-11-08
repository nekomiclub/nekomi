import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialQrCode2: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M520-120v-80h80v80zm-80-80v-200h80v200zm320-120v-160h80v160zm-80-160v-80h80v80zm-480 80v-80h80v80zm-80-80v-80h80v80zm360-280v-80h80v80zM170-650h140v-140H170zm-50 50v-240h240v240zm50 430h140v-140H170zm-50 50v-240h240v240zm530-530h140v-140H650zm-50 50v-240h240v240zm80 480v-120h-80v-80h160v120h80v80zM520-400v-80h160v80zm-160 0v-80h-80v-80h240v80h-80v80zm40-200v-160h80v80h80v80zm-190-90v-60h60v60zm0 480v-60h60v60zm480-480v-60h60v60z" /></svg>;
export default MaterialQrCode2;