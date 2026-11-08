import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTableLamp: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M520-120v-60h320v60zM191-580h189v-200H278zm459 360v-420q0-21.25-14.37-35.63Q621.25-690 600-690H440v140q0 12.75-8.62 21.37Q422.75-520 410-520H145q-16.74 0-25.87-13.5T117-562l106-242q8-17 22.55-26.5T278-840h102q24.75 0 42.38 17.62Q440-804.75 440-780v30h160q45.83 0 77.92 32.08Q710-685.83 710-640v420zM191-580h189z" /></svg>;
export default MaterialTableLamp;