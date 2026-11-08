import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDevicesFoldFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M470-120q-24.75 0-42.37-17.63Q410-155.25 410-180v-625q0-17.9 9.5-32.45T446-860l126-55q35-15 66.5 3t31.5 59v13h150q24.75 0 42.38 17.62Q880-804.75 880-780v600q0 24.75-17.62 42.37Q844.75-120 820-120zm67-60h283v-600H670v497q0 21.08-11.37 39.09-11.38 18-30.63 25.91zM80-780v-60h60v60zm0 660v-60h60v60zm0-165v-60h60v60zm0-165v-60h60v60zm0-165v-60h60v60zm165-165v-60h60v60zm0 660v-60h60v60z" /></svg>;
export default MaterialDevicesFoldFill;