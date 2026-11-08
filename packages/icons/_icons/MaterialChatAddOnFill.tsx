import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialChatAddOnFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M280-620h320v-60H280zm0 170h200v-60H280zm410 280v-120H570v-60h120v-120h60v120h120v60H750v120zm-570 10v-620q0-24.75 17.63-42.38Q155.25-840 180-840h520q24.75 0 42.38 17.62Q760-804.75 760-780v223q-10-2-20-2.5t-20-.5q-95 0-167.5 73T480-320q0 10 .5 20t2.5 20H240z" /></svg>;
export default MaterialChatAddOnFill;