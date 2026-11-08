import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPageless: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M410-80H100q-24.75 0-42.37-17.63Q40-115.25 40-140v-270h60v270h310zm140 0v-60h310v-270h60v270q0 24.75-17.62 42.37Q884.75-80 860-80zM40-550v-270q0-24.75 17.63-42.38Q75.25-880 100-880h310v60H100v270zm820 0v-270H550v-60h310q24.75 0 42.38 17.62Q920-844.75 920-820v270z" /></svg>;
export default MaterialPageless;