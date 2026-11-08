import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBackgroundGridSmallFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-120h75v-135H120v75q0 24.75 17.63 42.37Q155.25-120 180-120m135 0h135v-135H315zm195 0h135v-135H510zm195 0h75q24.75 0 42.38-17.63Q840-155.25 840-180v-75H705zM120-705h135v-135h-75q-24.75 0-42.37 17.62Q120-804.75 120-780zm0 195h135v-135H120zm0 195h135v-135H120zm195-390h135v-135H315zm0 195h135v-135H315zm0 195h135v-135H315zm195-390h135v-135H510zm0 195h135v-135H510zm0 195h135v-135H510zm195-390h135v-75q0-24.75-17.62-42.38Q804.75-840 780-840h-75zm0 195h135v-135H705zm0 195h135v-135H705z" /></svg>;
export default MaterialBackgroundGridSmallFill;