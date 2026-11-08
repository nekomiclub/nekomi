import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDiamond: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-120 80-600l120-240h560l120 240zM368-630h224l-75-150h-74zm82 381v-321H183zm60 0 267-321H510zm149-381h136l-75-150H584zm-494 0h136l75-150H240z" /></svg>;
export default MaterialDiamond;