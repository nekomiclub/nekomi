import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialScanFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M551-634h189L551-820zM220-80q-25 0-42.5-17.5T160-140v-170h640v170q0 25-17.5 42.5T740-80zM40-370v-60h880v60zm120-120v-330q0-25 17.5-42.5T220-880h361l219 219v171z" /></svg>;
export default MaterialScanFill;