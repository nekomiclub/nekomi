import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHlsOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m685-360-48-48h135v-53H654q-14 0-24-10t-10-24v-71q0-15 9.5-24.5T654-600h132q15 0 24.5 9.5T820-566v46h-48v-32H668v53h118q14 0 24 10t10 24v71q0 15-9.5 24.5T786-360zm-565 0v-240h48v89h98v-89h48v240h-48v-103h-98v103zM813-61 61-813l43-43 752 752zM396-360v-162l48 48v66h66l48 48z" /></svg>;
export default MaterialHlsOff;