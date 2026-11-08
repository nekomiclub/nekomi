import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMedication: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M440-269h79v-111h114v-80H519v-111h-79v111H327v80h113zM260-120q-24.75 0-42.37-17.63Q200-155.25 200-180v-479q0-24.75 17.63-42.38Q235.25-719 260-719h440q24.75 0 42.38 17.62Q760-683.75 760-659v479q0 24.75-17.62 42.37Q724.75-120 700-120zm0-60h440v-479H260zm-20-600v-60h481v60zm20 121v479z" /></svg>;
export default MaterialMedication;