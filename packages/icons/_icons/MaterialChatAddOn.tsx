import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialChatAddOn: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-160v-620q0-24.75 17.63-42.38Q155.25-840 180-840h520q24.75 0 42.38 17.62Q760-804.75 760-780v223q-10-2-20-2.5t-20-.5q-5 0-10 .17-5 .16-10 .83v-221H180v440h301q-.67 5-.83 10-.17 5-.17 10 0 10 .5 20t2.5 20H240zm160-460h320v-60H280zm0 170h200v-60H280zm410 280v-120H570v-60h120v-120h60v120h120v60H750v120zM180-340v-440z" /></svg>;
export default MaterialChatAddOn;