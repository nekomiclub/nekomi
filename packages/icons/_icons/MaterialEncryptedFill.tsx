import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEncryptedFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M429-360h102l-25-145q20.47-9.15 32.23-26.55Q550-548.94 550-570q0-28.88-20.59-49.44T479.91-640t-49.41 20.56T410-570q0 21.06 11.77 38.45Q433.53-514.15 454-505zm51 279q-140-35-230-162.5T160-523v-238l320-120 320 120v238q0 152-90 279.5T480-81" /></svg>;
export default MaterialEncryptedFill;