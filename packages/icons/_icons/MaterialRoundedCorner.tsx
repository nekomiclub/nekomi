import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRoundedCorner: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-120v-60h60v60zm0-165v-60h60v60zm0-165v-60h60v60zm0-165v-60h60v60zm0-165v-60h60v60zm165 660v-60h60v60zm0-660v-60h60v60zm165 660v-60h60v60zm165 0v-60h60v60zm165 0v-60h60v60zm0-165v-60h60v60zm60-165h-60v-195q0-57-39-96t-96-39H450v-60h195q80.93 0 137.96 57.04Q840-725.93 840-645z" /></svg>;
export default MaterialRoundedCorner;