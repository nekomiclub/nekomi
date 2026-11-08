import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialInstantMix: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M202-160v-294h-82v-60h224v60h-82v294zm0-414v-226h60v226zm166-41v-60h82v-125h60v125h82v60zm82 455v-395h60v395zm248 0v-127h-82v-60h224v60h-82v127zm0-247v-393h60v393z" /></svg>;
export default MaterialInstantMix;