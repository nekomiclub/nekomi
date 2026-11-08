import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTableFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-340H120v160q0 24.75 17.63 42.37Q155.25-120 180-120h270zm60 0v220h270q24.75 0 42.38-17.63Q840-155.25 840-180v-160zm-60-60v-220H120v220zm60 0h330v-220H510zM120-680h720v-100q0-24.75-17.62-42.38Q804.75-840 780-840H180q-24.75 0-42.37 17.62Q120-804.75 120-780z" /></svg>;
export default MaterialTableFill;