import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCheckedBag: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-120v-60h800v60zm138-120q-24 0-42-18t-18-42v-360q0-24 18-42t42-18h139q0-54 36-87t86-33 86 33 36 87h139q24 0 42 18t18 42v360q0 24-18 42t-42 18zm466-60h56v-360h-56zM401-720h156q0-34-23.5-54.5T479-795t-54.5 20.5T401-720M274-300v-360h-56v360zm45-360v360h320v-360zm-45 360h45zm410 0h-45zm-410 0h-56zm45 0h320zm365 0h56z" /></svg>;
export default MaterialCheckedBag;