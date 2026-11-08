import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLabPanel: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M100-120q-24.75 0-42.37-17.63Q40-155.25 40-180v-240q0-24.75 17.63-42.38Q75.25-480 100-480h20v-163q-17-6-28.5-21.39T80-700v-80q0-24.75 17.63-42.38Q115.25-840 140-840h240q24.75 0 42.38 17.62Q440-804.75 440-780v80q0 20.22-11.5 35.61T400-643v163h160v-163q-17-6-28.5-21.39T520-700v-80q0-24.75 17.63-42.38Q555.25-840 580-840h240q24.75 0 42.38 17.62Q880-804.75 880-780v80q0 20.22-11.5 35.61T840-643v163h20q24.75 0 42.38 17.62Q920-444.75 920-420v240q0 24.75-17.62 42.37Q884.75-120 860-120zm480-580h240v-80H580zm-440 0h240v-80H140zm480 220h160v-160H620zm-440 0h160v-160H180zm-80 300h760v-240H100zm40-520v-80zm440 0v-80zM100-180v-240z" /></svg>;
export default MaterialLabPanel;