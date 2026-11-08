import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHeatPumpBalanceFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M352.5-259q32.5-33 32.5-80v-244q0-22 15.5-37.5T438-636t37 15.5 15 37.5v244q0 47 33 80t80 33 79.5-33 32.5-80v-287q0-21 14.5-35.5T765-676h81l-58 56 42 43 130-129-130-130-42 43 57 57h-80q-46 0-78 32t-32 78v287q0 22-15 37.5T603-286t-37.5-15.5T550-339v-244q0-47-32.5-80T438-696t-80 33-33 80v244q0 22-15 37.5T273-286t-37.5-15.5T220-339v-357h-60v357q0 47 33 80t80 33 79.5-33M100-96q-25 0-42.5-17.5T40-156v-335h880v335q0 25-17.5 42.5T860-96z" /></svg>;
export default MaterialHeatPumpBalanceFill;