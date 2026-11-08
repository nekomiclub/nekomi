import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRollerShadesClosed: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-120v-60h80v-660h640v660h80v60H540q0 24.86-17.6 42.43T479.9-60t-42.4-17.57T420-120zm140-230h520v-430H220zm0 170h230v-110H220zm290 0h230v-110H510zM220-780h520z" /></svg>;
export default MaterialRollerShadesClosed;