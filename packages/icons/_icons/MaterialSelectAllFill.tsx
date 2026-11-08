import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSelectAllFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M285-285v-390h390v390zm60-60h270v-270H345zM180-180v60q-24.75 0-42.37-17.63Q120-155.25 120-180zm-60-105v-60h60v60zm0-165v-60h60v60zm0-165v-60h60v60zm60-165h-60q0-24.75 17.63-42.38Q155.25-840 180-840zm105 660v-60h60v60zm0-660v-60h60v60zm165 660v-60h60v60zm0-660v-60h60v60zm165 660v-60h60v60zm0-660v-60h60v60zm165 660v-60h60q0 25-17.62 42.5Q804.75-120 780-120m0-165v-60h60v60zm0-165v-60h60v60zm0-165v-60h60v60zm0-165v-60q24.75 0 42.38 17.62Q840-804.75 840-780z" /></svg>;
export default MaterialSelectAllFill;