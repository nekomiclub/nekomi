import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialChessBishop2Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M232-211q-38-52-55-126.5T160-478q0-119 85-200t176-131q-6-8-9-18t-3-21q0-29 21-50t50-21 50.5 21 21.5 50q0 11-3.5 20.5T540-809q93 52 176.5 130T800-478q0 66-16.5 141T728-211zM211-80q-21 0-35.5-15T161-131t15-35.5 36-14.5h538q21 0 35.5 14.5T800-131t-14.5 36T750-80zm239-291h60v-82h83v-60h-83v-82h-60v82h-82v60h82z" /></svg>;
export default MaterialChessBishop2Fill;