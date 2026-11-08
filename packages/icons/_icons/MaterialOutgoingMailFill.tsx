import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialOutgoingMailFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m734-164-42-42 73-74H584v-60h181l-73-74 42-42 146 146zM416-532l284-179v-69L416-606 140-780v74zM140-280q-24.8 0-42.4-17.6T80-340v-440q0-24.8 17.6-42.4T140-840h560q24.8 0 42.4 17.6T760-780v232q-7.5-1-15-1.5t-15-.5q-103 0-171.5 67T490-313q0 8.33.5 16.67Q491-288 493-280z" /></svg>;
export default MaterialOutgoingMailFill;