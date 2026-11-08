import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPriceChange: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-160v-640h800v640zm60-60h680v-520H140zm0 0v-520zm184-54h60v-45h48q16 0 25.5-12t9.5-27v-114.74q0-16.26-9.5-27.76T432-512H297v-69h170v-60h-83v-45h-60v45h-48q-16 0-27.5 12T237-600.88v113.76q0 16.12 11.5 25.62T276-452h131v73H237v60h87zm326-35 60-60H590zm-60-272h120l-60-60z" /></svg>;
export default MaterialPriceChange;